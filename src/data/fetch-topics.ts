import Topic from "./topic";
import fs from 'fs';

const TOPICS_DATA_FILE_NAME = '../../data/topics.json';

export default function fetchTopics () : Topic {
    const topicsData = fs.readFileSync(TOPICS_DATA_FILE_NAME, 'utf8');

    const allTopics: Topic = JSON.parse(topicsData);

    return allTopics;
}