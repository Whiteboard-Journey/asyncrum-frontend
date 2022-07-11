import { Project } from '../types';

export default function useProjectOverview(project: Project, displayCount: number) {
    let modifiedTeamMembers;

    if (project.assignTo.length <= displayCount || project.assignTo.length - displayCount === 1) {
        modifiedTeamMembers = project.assignTo;
    } else {
        modifiedTeamMembers = project.assignTo.filter((m, index) => index < displayCount);
    }

    return { modifiedTeamMembers };
}
