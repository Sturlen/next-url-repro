import { type DynamicRoute } from "next-typesafe-url";
import { useRouteParams } from "next-typesafe-url/pages"; //this import fails
import { z } from "zod";

const Route = {
  routeParams: z.object({
    postId: z.number(),
  }),
} satisfies DynamicRoute;
export type RouteType = typeof Route;

export default function PostPage() {
  const { data } = useRouteParams(Route.routeParams);
  return <div>{data && <p>{data.postId}</p>}</div>;
}
