import { Topic } from "./topic";
import fs from 'fs';
import { promisify } from "util";

const TOPICS_DATA_FILE_NAME = '../../data/topics.json';

const readFile = promisify(fs.readFile);

export default async function fetchTopics (fileName = TOPICS_DATA_FILE_NAME) : Promise<Topic> {
    const topicsData = await readFile(TOPICS_DATA_FILE_NAME, 'utf8');

    const allTopics: Topic = JSON.parse(topicsData);

    return allTopics;
}