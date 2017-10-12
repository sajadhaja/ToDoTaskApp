
export class Task {


    constructor(
        public taskname: string,
        public priority: string,
        public duedate: string,
        public assignee: string,
        public status: string,
        public notes: string
    ) { }
}