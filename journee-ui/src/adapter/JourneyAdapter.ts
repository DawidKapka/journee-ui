import {JourneyPreview} from "../types/JourneyPreview";

const fetchAllJourneyPreviewsForUser = (_uid) => {
    // TODO
    return new Promise<JourneyPreview>((resolve, _reject) => {
        setTimeout(() => {
            resolve([
                {
                    title: 'Japan 2023',
                    jid: '2',
                    imageUrl: 'https://media.cntraveler.com/photos/5e6b9dc0fa61f5000875909f/16:9/w_2560,c_limit/OmoideYokocho-2020-RA3JC5.jpg'
                },
                {
                    title: 'USA 2022',
                    jid: '1'
                }
            ] as JourneyPreview[])
        }, 200)
    })
}

export const journeyAdapter = {
    fetchAllJourneyPreviewsForUser
}
