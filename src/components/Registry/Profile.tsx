"use client";

import Link from "next/link";
import { Address, truncatedString } from "../Address";
import Table from "../Table";
import { TTableData } from "@/types/types";
import { convertChainIdToNetworkName } from "@/utils/utils";

const Profile = (data: any) => {
  const tableData: TTableData = {
    headers: ["ID", "Anchor", "Name", "Sender", "Network"],
    rows: Object.values(data.data).map((profile: any) => {
      return [
        // eslint-disable-next-line react/jsx-key
        <Link href={`/profile/${profile.chainId}/${profile.profileId}`}>
          <span className="text-green-800">
            {truncatedString(profile.profileId)}
          </span>
        </Link>,
        // eslint-disable-next-line react/jsx-key
        <Address address={profile.anchor} chainId={profile.chainId} />,
        profile.name,
        // eslint-disable-next-line react/jsx-key
        <Address address={profile.creator} chainId={profile.chainId} />,
        convertChainIdToNetworkName(profile.chainId),
      ];
    }),
  };

  return (
    <Table
      data={tableData}
      header={"Profiles"}
      description={
        "A list of all the profiles in the registry on all supported networks"
      }
    />
  );
};

export default Profile;
