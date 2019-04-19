import { Resolvers } from "../../../../src/types/resolvers";
import privateResolver from "../../../../src/utils/privateResolvers";
import {
  GetMeetingQueryArgs,
  GetMeetingResponse
} from "../../../../src/types/graphql";
import Meeting from "../../../../src/entities/Meeting";
import { getRepository } from "typeorm";

const resolvers: Resolvers = {
  Query: {
    GetMeeting: privateResolver(
      async (
        _,
        args: GetMeetingQueryArgs,
        { req }
      ): Promise<GetMeetingResponse> => {
        const { hashKey } = args;
        const { user } = req;

        try {
          const getMeeting = await getRepository(Meeting)
            .createQueryBuilder("meeting")
            .innerJoinAndSelect(
              "meeting.participants",
              "participants",
              "participants.id = :userId",
              { userId: user.id }
            )
            .leftJoinAndSelect("meeting.confirmDay", "confirmDay")
            .where({ hashKey })
            .andWhere("meeting.isValid = :isValid", { isValid: true })
            .getOne();

          if (!getMeeting) {
            return {
              ok: false,
              error: "해당하는 일정이 존재하지 않습니다",
              Meeting: null
            };
          }

          return {
            ok: true,
            error: null,
            Meeting: getMeeting
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            Meeting: null
          };
        }
      }
    )
  }
};

export default resolvers;
