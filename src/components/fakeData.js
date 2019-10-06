// Data를 class와 instance로 만들어서 주는 건 어떨까?!


export const fakeData = {

  schedule: [

    { scheduleKey: 1,
      scheduledDate: "2019/08/23",
      scheduledTime: "1000 ~ 1300",
      createdDate: "2019/08/17",
      scheduleName: "pair programming",
      done: false,
      todo: [
        { todoKey: 1,
          name: "do navigator",
          done: true,
        },
        { todoKey: 2,
          name: "do driver",
          done: false,
        }
      ]
    },

    { scheduleKey: 2,
      scheduledDate: "2019/08/27",
      scheduledTime: "1800 ~ 1900",
      createdDate: "2019/08/15",
      scheduleName: "playing game",
      done: false,
      todo: [
        { todoKey: 1,
          name: "play tanker",
          done: false,
        },
        { todoKey: 2,
          name: "play dealer",
          done: true,
        },
        { todoKey: 3,
          name: "play suppoter",
          done: false,
        },
      ]
    },

  ]

}