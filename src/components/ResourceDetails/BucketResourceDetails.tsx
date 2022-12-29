import { trpc } from "../../utils/trpc.js";
import { ResourceNode } from "../ExpandedNode.js";

export interface BucketResourceDetailsProps {
  resource: ResourceNode;
}

export const BucketResourceDetails = ({
  resource,
}: BucketResourceDetailsProps) => {
  const resourcePath = resource.path;
  const bucketList = trpc.useQuery(["bucket.list", { resourcePath }]);

  return (
    <>
      <dt className="truncate text-slate-500">Files</dt>
      <dd className="truncate col-span-4">
        {bucketList.data?.length}{" "}
        {bucketList.data?.length === 1 ? "file" : "files"}
      </dd>
    </>
  );
};
