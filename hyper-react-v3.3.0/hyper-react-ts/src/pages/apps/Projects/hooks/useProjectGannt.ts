import { useState, useEffect } from 'react';
import Gantt from 'frappe-gantt';
import { GanttProjectItem } from '../types';
import { projects, tasks as tasksData } from '../Gantt/data';

export default function useProjectGannt() {
    const [selectedProject, setSelectedProject] = useState<GanttProjectItem>(projects[1]);
    const [mode, setMode] = useState<Gantt.viewMode>('Week');
    const [gantt, setGantt] = useState<Gantt>();

    const modes: Gantt.viewMode[] = ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'];

    useEffect(() => {
        // create gantt
        const gantt = new Gantt('#tasks-gantt', [...tasksData], {
            view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
            bar_height: 20,
            padding: 18,
            view_mode: 'Week',
            custom_popup_html(task) {
                return (
                    '<div class="popover fade show bs-popover-right gantt-task-details" role="tooltip">' +
                    '<div class="arrow"></div><div class="popover-body">' +
                    `<h5>${task.name}</h5><p class="mb-2">Expected to finish by ${task.end}</p>` +
                    '<div class="progress mb-2" style="height: 10px;">' +
                    `<div class="progress-bar" role="progressbar" style="width: ${task.progress}%;" aria-valuenow="${task.progress}"` +
                    ` aria-valuemin="0" aria-valuemax="100">${task.progress}%</div>` +
                    '</div></div></div>'
                );
            },
        });
        setGantt(gantt);
    }, []);

    const onSelectProject = (p: GanttProjectItem) => {
        setSelectedProject(p);
    };

    /**
     * On mode change
     * @param {*} mode
     */
    const changeMode = (mode: Gantt.viewMode) => {
        setMode(mode);
        if (gantt) {
            gantt.change_view_mode(mode);
        }
    };
    return {
        mode,
        selectedProject,
        modes,
        onSelectProject,
        changeMode,
    };
}
