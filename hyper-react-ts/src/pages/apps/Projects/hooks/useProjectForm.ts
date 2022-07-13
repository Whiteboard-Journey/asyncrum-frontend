import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import avatar1 from 'assets/images/users/avatar-6.jpg';
import avatar2 from 'assets/images/users/avatar-7.jpg';
import avatar3 from 'assets/images/users/avatar-8.jpg';
import avatar4 from 'assets/images/users/avatar-9.jpg';
import avatar5 from 'assets/images/users/avatar-10.jpg';
import avatar6 from 'assets/images/users/avatar-4.jpg';
import avatar7 from 'assets/images/users/avatar-5.jpg';
import avatar8 from 'assets/images/users/avatar-1.jpg';
import { TeamMember } from '../types';

export default function useProjectForm() {
    const [teamMembers] = useState<TeamMember[]>([
        { value: 'Shreyu N', name: 'Shreyu N', image: avatar2 },
        { value: 'Greeva N', name: 'Greeva N', image: avatar5 },
        { value: 'Dhyanu B', name: 'Dhyanu B', image: avatar4 },
        { value: 'Mannat B', name: 'Mannat B', image: avatar6 },
        { value: 'Katu S', name: 'Katu S', image: avatar7 },
        { value: 'Nik N', name: 'Nik N', image: avatar1 },
        { value: 'Rik N', name: 'Rik N', image: avatar8 },
    ]);

    const [selectedTeamMembers, setSelectedTeamMembers] = useState<TeamMember[]>([
        { value: 'Shreyu N', name: 'Shreyu N', image: avatar1 },
        { value: 'Greeva N', name: 'Greeva N', image: avatar2 },
        { value: 'Dhyanu B', name: 'Dhyanu B', image: avatar3 },
    ]);

    /*
     *  add selected team members
     */
    const selectTeamMembers = (e: any[]) => {
        if (e.length !== 0) {
            const isAlreadySelected = selectedTeamMembers.filter((x) => x['name'] && x['name'] === e[0].name);
            if (isAlreadySelected && isAlreadySelected.length === 0) {
                setSelectedTeamMembers([...selectedTeamMembers, e[0]]);
            }
        }
    };

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            name: yup.string().required('Please enter Project Name'),
        })
    );

    /*
     * form methods
     */
    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    /**
     * Handle the form submission
     */
    const handleValidSubmit = (value: Record<string, string>) => {
        console.log({ ...value });
    };

    return {
        teamMembers,
        selectedTeamMembers,
        handleSubmit,
        register,
        control,
        errors,
        handleValidSubmit,
        selectTeamMembers,
    };
}
