import { Resolvers } from "../../../../src/types/resolvers";
import privateResolver from "../../../../src/utils/privateResolvers";
import {
  GetMeetingsResponse,
  GetMeetingsQueryArgs
} from "../../../../src/types/graphql";
import Meeting from "../../../../src/entities/Meeting";
import { getRepository } from "typeorm";

const resolvers: Resolvers = {
  Query: {
    GetMeetings: privateResolver(
      async (
        _,
        args: GetMeetingsQueryArgs,
        { req }
      ): Promise<GetMeetingsResponse> => {
        const { type } = args;
        const { user } = req;

        let Meetings;

        try {
          if (type === "all") {
            Meetings = await getRepository(Meeting)
              .createQueryBuilder("meeting")
              .leftJoinAndSelect(
                "meeting.participants",
                "participants",
                "participants.id = :userId",
                { userId: user.id }
              )
              .getMany();
          }
          if (type === "before") {
            Meetings = await getRepository(Meeting)
              .createQueryBuilder("meeting")
              .leftJoinAndSelect(
                "meeting.participants",
                "participants",
                "participants.id = :userId",
                { userId: user.id }
              )
              .leftJoinAndSelect("meeting.confirmDay", "confirmDay")
              .where("confirmDay.pickDate > NOW()")
              .orWhere('meeting."confirmDayId" IS NULL')
              .getMany();
          } else if (type === "end") {
            Meetings = await getRepository(Meeting)
              .createQueryBuilder("meeting")
              .leftJoinAndSelect(
                "meeting.participants",
                "participants",
                "participants.id = :userId",
                { userId: user.id }
              )
              .leftJoinAndSelect("meeting.confirmDay", "confirmDay")
              .where("confirmDay.pickDate < NOW()")
              .getMany();
          }

          if (!Meetings) {
            return {
              ok: true,
              error: "일정이 없습니다. 지금 일정을 만들어보세요!",
              Meetings: null
            };
          }

          return {
            ok: true,
            error: null,
            Meetings
          };
        } catch (error) {
          return { ok: false, error: error.message, Meetings: null };
        }
      }
    )
  }
};

export default resolvers;
