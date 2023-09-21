import fetchTopics from '../../src/data/fetch-topics';

describe('Fetch topics data', () => {
    it('should parse topics data', async () => {
        const data = await fetchTopics('./data/topics.json');
    });
});