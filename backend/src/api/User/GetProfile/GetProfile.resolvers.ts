import { Resolvers } from "../../../../src/types/resolvers";
import privateResolver from "../../../../src/utils/privateResolvers";
import { GetProfileResponse } from "../../../../src/types/graphql";
import User from "../../../../src/entities/User";

const resolvers: Resolvers = {
  Query: {
    GetProfile: privateResolver(
      async (_, __, { req }): Promise<GetProfileResponse> => {
        const { user } = req;

        const myProfile = await User.findOne({ id: user.id });

        if (!myProfile) {
          return {
            ok: false,
            error: "요청하신 회원을 찾을 수 없습니다",
            User: null
          };
        }
        return {
          ok: true,
          error: null,
          User: myProfile
        };
      }
    )
  }
};

export default resolvers;
