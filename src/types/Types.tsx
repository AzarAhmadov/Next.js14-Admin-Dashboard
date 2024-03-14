export type Vacancy = {
    id: number,
    img: string;
    company_name: string;
    job: string;
    path: string;
    detail_jobs: {
        location: string;
        time: string;
        time_post: string;
    }[];
    date: string;
    salary?: string;
    desc: string;
    category: string;
};