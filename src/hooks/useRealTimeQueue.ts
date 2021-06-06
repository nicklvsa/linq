import { useState } from 'react';
import { Queue } from '../utils/models';

const useRealTimeQueue = (initialQueue: Queue): Queue => {
    const [queueData, setQueueData] = useState(initialQueue);

    

    return queueData;
};

export default useRealTimeQueue;
