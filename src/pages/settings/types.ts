export type Member = {
    fullname: string;
    profileImageUrl: string;
  };
  
export type Team = {
    id: number;
    name: string;
    pictureUrl: string;
    members: Member[];
  };
  
export type Invitation = {
    memberId: null;
    memberEmail: string;
  };

export type TeamInfoFormProps = {
  team: Team | undefined;
  teamname: string | undefined;
  setTeamname: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export type TeamImageFormProps = {
  team: Team | undefined;
  previewImage: string | undefined;
  setPreviewImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export type InviteMemberButtonProps = {
  team: Team | undefined;
}