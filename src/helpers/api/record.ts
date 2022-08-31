import { APICore } from './apiCore';

const api = new APICore();
const baseURL = '/api/v1/records'

const readAllDailyStandups = (params: { scope: string, pageIndex: number }) => {
    return api.get(baseURL, params);
  }

const viewDailyStandup = (id: number) => {
    const params = {
        title: null,
        description: null,
        scope: 'team',
    };

    api.updatePatch(baseURL + '/' + id, params)
}

export { readAllDailyStandups, viewDailyStandup }