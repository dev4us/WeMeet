import { Resolvers } from "../../../../src/types/resolvers";
import privateResolver from "../../../../src/utils/privateResolvers";
import {
  CreateMeetingMutationArgs,
  CreateMeetingResponse
} from "../../../../src/types/graphql";
import Meeting from "../../../../src/entities/Meeting";

const resolvers: Resolvers = {
  Mutation: {
    CreateMeeting: privateResolver(
      async (
        _,
        args: CreateMeetingMutationArgs,
        { req }
      ): Promise<CreateMeetingResponse> => {
        const { user } = req;
        const { title, description, thumbnail } = args;

        try {
          const generatedHash = await Math.random()
            .toString(36)
            .substr(2, 6);

          const newMeeting = await Meeting.create({
            title,
            thumbnail,
            description,
            admin: user,
            participants: [user],
            hashKey: generatedHash
          }).save();

          if (!newMeeting) {
            return {
              ok: false,
              error: "일정 생성이 실패했습니다.",
              Meeting: null
            };
          }

          return {
            ok: true,
            error: null,
            Meeting: newMeeting
          };
        } catch (error) {
          return {
            ok: false,
            error: error.getMessage(),
            Meeting: null
          };
        }
      }
    )
  }
};

export default resolvers;
