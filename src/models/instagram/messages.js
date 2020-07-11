// participants string[]
// conversation message[]
// message {
//   sender string
//   created_at date
//   text | media string
// }
export default class InstagramMessages {
  static isMessages(data) {
    if (data == null) {
      return false;
    }
    if (!Array.isArray(data)) {
      return false;
    }
    if (data.length > 0) {
      const sample = data[0];
      if (sample.hasOwnProperty('participants') && sample.hasOwnProperty('conversation')) {
        return true;
      }
    }
    return false;
  }
}
const sample = {
  "participants": [
    "daisyraj",
    "hsimah_"
  ],
  "conversation": [
    {
      "sender": "daisyraj",
      "created_at": "2020-06-22T06:29:25.861933+00:00",
      "text": "Luna only gets stressed when I make dough.. she does not like the way it vibrates or something"
    },
    {
      "sender": "daisyraj",
      "created_at": "2020-06-22T06:28:52.346446+00:00",
      "text": "😂"
    },
    {
      "sender": "hsimah_",
      "created_at": "2020-06-22T02:22:51.309487+00:00",
      "text": "Dog vs themomix"
    },
    {
      "sender": "hsimah_",
      "created_at": "2020-06-22T02:22:39.913381+00:00",
      "media": "https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/e35/104342448_3200391663401819_9078904667987287923_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=Dy6w7Ui9aNAAX-tpI1a&oh=4d423fe700bf554056b30e307c7922e7&oe=5F2DCC6A&ig_cache_key=MjMzNjgzNTgyMjY0MzY0NjQzNQ%3D%3D.2"
    },
    {
      "sender": "daisyraj",
      "created_at": "2020-06-21T00:50:35.703879+00:00",
      "text": "Yeah they rock, I’ve literally forgotten how to cook without one 😬"
    }, {
      "sender": "hsimah_",
      "created_at": "2020-06-21T00:49:08.052255+00:00",
      "text": "I knew they were good but shit is next level"
    }, {
      "sender": "hsimah_",
      "created_at": "2020-06-21T00:48:52.997903+00:00",
      "text": "It's mind-blowing"
    }, {
      "sender": "daisyraj",
      "created_at": "2020-06-21T00:44:21.138993+00:00",
      "text": "Mines a tm5, Tung won’t upgrade me 😢"
    }, {
      "sender": "daisyraj",
      "created_at": "2020-06-21T00:44:01.970090+00:00",
      "text": "Ooh are you in the thermomix cult too 😍"
    }, {
      "sender": "hsimah_",
      "created_at": "2020-06-20T23:23:49.901917+00:00",
      "story_share": "Shared daisyraj's story",
      "text": "I made tm6 pancakes this morning too"
    }, {
      "sender": "daisyraj",
      "created_at": "2020-03-30T03:06:28.211129+00:00",
      "story_share": "Shared hsimah_'s story",
      "text": "😍"
    }, {
      "sender": "daisyraj",
      "created_at": "2019-11-15T05:47:05.726331+00:00",
      "text": "Are you in Seattle? I don’t think we’ll be there :( LA, San Fran, Chicago, Washington, NYC ... and Toronto lol"
    }, {
      "sender": "hsimah_",
      "created_at": "2019-11-15T04:40:17.961751+00:00",
      "story_share": "Shared daisyraj's story",
      "text": "Coming to visit me hey"
    }, {
      "sender": "daisyraj",
      "created_at": "2019-08-25T13:33:07.818488+00:00",
      "text": "I’m so confused"
    }, {
      "sender": "daisyraj",
      "created_at": "2019-08-25T13:32:59.128287+00:00",
      "text": "Wait that might be a different elephant show"
    }, {
      "sender": "daisyraj",
      "created_at": "2019-08-25T13:31:54.832721+00:00",
      "story_share": "Shared hsimah_'s story",
      "text": "Nelly the elephant packed her trunk and set off for the jungle"
    }, {
      "sender": "daisyraj",
      "created_at": "2019-07-20T04:26:39.758769+00:00",
      "story_share": "Shared hsimah_'s story",
      "text": "😮"
    }, {
      "sender": "hsimah_",
      "created_at": "2019-01-30T23:09:43.517757+00:00",
      "story_share": "Shared daisyraj's story",
      "text": "Fun game. Recommended."
    }, {
      "sender": "daisyraj",
      "created_at": "2017-06-24T07:11:50.400340+00:00",
      "text": "Shopping centres are like calculating the best route with the least rides 😑"
    }, {
      "sender": "hsimah_",
      "created_at": "2017-06-24T06:12:14.253891+00:00",
      "story_share": "Shared daisyraj's story",
      "text": "Twas a good day when Jye grew out of those shitty rides lol. It was cute at first but after four years of it..."
    }
  ]
}
