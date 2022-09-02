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

export type CreateSteps = {
  previous?: () => void;
  next?: () => void;
};

export type CreateTeamNameFormProps = CreateSteps & {
  onCreateTeam: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export type CreateTeamImageFormProps = CreateSteps & TeamImageFormProps;

export type TeamInfoFormProps = {
  teamname: string | undefined;
  onSubmitTeamInfo: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export type TeamImageFormProps = {
  fileInput: React.RefObject<HTMLInputElement>;
  previewImage: string | undefined;
  onChangeLogoImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveLogoImage: (e: React.MouseEvent<HTMLElement>) => Promise<void>;
  onCancelChangeLogoImage: () => void;
};

export type InviteMemberButtonProps = {
  onInvite: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};
