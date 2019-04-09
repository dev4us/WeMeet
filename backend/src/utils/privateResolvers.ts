const privateResolver = resolverFunction => async (
  parent,
  args,
  context,
  info
) => {
  if (!context.req.user) {
    throw new Error("토큰이 만료되었거나 존재하지 않습니다");
  }
  const resolverd = await resolverFunction(parent, args, context, info);
  return resolverd;
};

export default privateResolver;
