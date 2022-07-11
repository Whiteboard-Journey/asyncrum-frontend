// images
import avatar3 from '../../../assets/images/users/avatar-3.jpg';
import avatar5 from '../../../assets/images/users/avatar-2.jpg';
import avatar9 from '../../../assets/images/users/avatar-9.jpg';
import avatar10 from '../../../assets/images/users/avatar-5.jpg';

import img1 from '../../../assets/images/small/small-4.jpg';
import img2 from '../../../assets/images/small/small-2.jpg';
import img3 from '../../../assets/images/small/small-3.jpg';

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Jeremy Tomlinson',
            avatar: avatar3,
        },
        postedOn: 'about 2 minuts ago',
        scope: 'Public',
        // tslint:disable-next-line: max-line-length
        content:
            '<div class="font-16 text-center text-dark my-3"><i class="mdi mdi-format-quote-open font-20"></i> Leave one wolf alive and the sheep are never safe. When people ask you what happened here, tell them the North remembers. Tell them winter came for House Frey.</div>',
        totalLikes: '2k',
        totalComments: '200',
        isLiked: true,
        comments: [
            {
                id: 1,
                content: 'This is awesome! Proud of sis :) Waiting for you to come back to winterfall',
                postedOn: '2 mins ago',
                author: {
                    id: 2,
                    name: 'Sansa Stark',
                    avatar: avatar9,
                },
                isLiked: true,
                replies: [
                    {
                        id: 3,
                        content: "I swear! She won't be able to reach to winterfall",
                        postedOn: '1 min ago',
                        author: {
                            id: 3,
                            name: 'Cersei Lannister',
                            avatar: avatar10,
                        },
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        author: {
            id: 4,
            name: 'Jon Snow',
            avatar: avatar5,
        },
        postedOn: 'about 20 minuts ago',
        scope: 'Public',
        // tslint:disable-next-line: max-line-length
        content:
            '<div class="my-3"><p>"Feeling awesome at the wall!"</p><div class="row"><div class="col-sm-8">' +
            '<img src="' +
            img1 +
            '" alt="post-img" class="rounded me-1 mb-3 mb-sm-0 img-fluid" /></div><div class="col">' +
            '<img src="' +
            img2 +
            '" alt="post-img" class="rounded me-1 img-fluid mb-3" />' +
            '<img src="' +
            img3 +
            '" alt="post-img" class="rounded me-1 img-fluid" /></div></div></div>',
        totalLikes: '1.2k',
        totalComments: '148',
        isLiked: false,
        comments: [
            {
                id: 1,
                content: 'This is awesome! Proud of you bro :)',
                postedOn: '2 mins ago',
                author: {
                    id: 2,
                    name: 'Sansa Stark',
                    avatar: avatar9,
                },
                isLiked: false,
                replies: [],
            },
        ],
    },
];

export default posts;
