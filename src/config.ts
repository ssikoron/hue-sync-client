export interface HueStreamConfig {
  bridge: {
    ipAddress: string;
    username: string;
    clientKey: string;
  };
  target: {
    groupId: number;
  };
}

const config: HueStreamConfig = {
  bridge: {
    ipAddress: '192.168.1.10',
    username: 'v1oWts24oWSSV4IW7BY3V7-mgb8Q1XKAxYg6dMed',
    clientKey: '7D9F9917CF59426002ADD3C746584ED3'
  },
  target: {
    groupId: 2
  }
};

export default config;

const backup = {
  bridges: [
    {
      name: 'Philips Hue',
      ip: '192.168.1.10',
      username: 'v1oWts24oWSSV4IW7BY3V7-mgb8Q1XKAxYg6dMed',
      clientKey: '7D9F9917CF59426002ADD3C746584ED3',
      id: 1,
      groups: [
        {
          groupId: 2,
          lights: {
            9: {
              mapTo: 6,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            10: {
              mapTo: 7,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            54: {
              mapTo: 0,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            12: {
              mapTo: 1,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            5: {
              mapTo: 3,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            6: {
              mapTo: 5,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            7: {
              mapTo: 2,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            8: {
              mapTo: 4,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            }
          }
        },
        {
          groupId: 10,
          lights: {
            37: {
              mapTo: 0,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            38: {
              mapTo: 1,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            }
          }
        },
        {
          groupId: 15,
          lights: {
            39: {
              mapTo: 0,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            40: {
              mapTo: 2,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            41: {
              mapTo: 5,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            42: {
              mapTo: 3,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            43: {
              mapTo: 7,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            44: {
              mapTo: 6,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            45: {
              mapTo: 4,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            46: {
              mapTo: 1,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            }
          }
        }
      ]
    },
    {
      name: 'Philips Hue play',
      ip: '192.168.1.2',
      username: '-U7wgQWU1dTsshf6C2xakocZdnSZszhwlpXfAGce',
      clientKey: '09A5E247BEAE1384FD1A85E434B018F8',
      id: 2,
      groups: [
        {
          groupId: 2,
          lights: {
            7: {
              mapTo: 5,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            5: {
              mapTo: 4,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            1: {
              mapTo: 6,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            2: {
              mapTo: 0,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            4: {
              mapTo: 3,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            8: {
              mapTo: 7,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            9: {
              mapTo: 1,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            },
            10: {
              mapTo: 2,
              maxBrightness: 1.0,
              baseBrightnessMultiplier: 1.0,
              allowedToStrobe: true
            }
          }
        }
      ]
    }
  ],
  profiles: [
    {
      id: 'config-0',
      name: 'Plafond',
      equipment: [
        {
          bridge: 1,
          group: 2
        }
      ],
      patterns: [
        {
          id: 0,
          name: 'Pattern 7',
          sequence: [
            {
              durationMultiplier: 2.2,
              pattern: [0, 2, 4, 6]
            },
            {
              durationMultiplier: 2.2,
              pattern: [1, 3, 5, 7]
            }
          ],
          allowBaseColor: true,
          allowOnBuildups: true,
          onlyOnBuildups: false,
          reverseAllowed: false
        },
        {
          id: 1,
          name: 'Pattern 3',
          sequence: [
            {
              durationMultiplier: 2.2,
              pattern: [0, 2]
            },
            {
              durationMultiplier: 2.2,
              pattern: [1, 3]
            },
            {
              durationMultiplier: 2.2,
              pattern: [6, 4]
            },
            {
              durationMultiplier: 2.2,
              pattern: [7, 5]
            },
            {
              durationMultiplier: 2.2,
              pattern: [6, 4]
            },
            {
              durationMultiplier: 2.2,
              pattern: [1, 3]
            }
          ],
          allowBaseColor: true,
          allowOnBuildups: true,
          onlyOnBuildups: false,
          reverseAllowed: false
        },
        {
          id: 2,
          name: 'Pattern 3',
          sequence: [
            {
              durationMultiplier: 2.2,
              pattern: [0, 2]
            },
            {
              durationMultiplier: 2.2,
              pattern: [1, 3]
            },
            {
              durationMultiplier: 2.2,
              pattern: [6, 4]
            },
            {
              durationMultiplier: 2.2,
              pattern: [7, 5]
            }
          ],
          allowBaseColor: true,
          allowOnBuildups: true,
          onlyOnBuildups: false,
          reverseAllowed: false
        },
        {
          id: 3,
          name: 'Pattern 7',
          sequence: [
            {
              durationMultiplier: 2.2,
              pattern: [0, 7, 2, 5]
            },
            {
              durationMultiplier: 2.2,
              pattern: [1, 6, 3, 4]
            }
          ],
          allowBaseColor: true,
          allowOnBuildups: true,
          onlyOnBuildups: false,
          reverseAllowed: false
        },
        {
          id: 4,
          name: 'Pattern 3',
          sequence: [
            {
              durationMultiplier: 2.2,
              pattern: [7, 5]
            },
            {
              durationMultiplier: 2.2,
              pattern: [6, 4]
            },
            {
              durationMultiplier: 2.2,
              pattern: [1, 3]
            },
            {
              durationMultiplier: 2.2,
              pattern: [0, 2]
            }
          ],
          allowBaseColor: true,
          allowOnBuildups: true,
          onlyOnBuildups: false,
          reverseAllowed: false
        },
        {
          id: 5,
          name: 'Pattern 3',
          sequence: [
            {
              durationMultiplier: 2.2,
              pattern: [0]
            },
            {
              durationMultiplier: 2.2,
              pattern: [1]
            },
            {
              durationMultiplier: 2.2,
              pattern: [2]
            },
            {
              durationMultiplier: 2.2,
              pattern: [3]
            },
            {
              durationMultiplier: 2.2,
              pattern: [4]
            },
            {
              durationMultiplier: 2.2,
              pattern: [5]
            },
            {
              durationMultiplier: 2.2,
              pattern: [6]
            },
            {
              durationMultiplier: 2.2,
              pattern: [7]
            }
          ],
          allowBaseColor: true,
          allowOnBuildups: true,
          onlyOnBuildups: false,
          reverseAllowed: false
        },
        {
          id: 6,
          name: 'Pattern 3',
          sequence: [
            {
              durationMultiplier: 2.2,
              pattern: [7]
            },
            {
              durationMultiplier: 2.2,
              pattern: [6]
            },
            {
              durationMultiplier: 2.2,
              pattern: [5]
            },
            {
              durationMultiplier: 2.2,
              pattern: [4]
            },
            {
              durationMultiplier: 2.2,
              pattern: [3]
            },
            {
              durationMultiplier: 2.2,
              pattern: [2]
            },
            {
              durationMultiplier: 2.2,
              pattern: [1]
            },
            {
              durationMultiplier: 2.2,
              pattern: [0]
            }
          ],
          allowBaseColor: true,
          allowOnBuildups: true,
          onlyOnBuildups: false,
          reverseAllowed: false
        },
        {
          id: 5,
          name: 'Pattern 3',
          sequence: [
            {
              durationMultiplier: 2.2,
              pattern: [0]
            },
            {
              durationMultiplier: 2.2,
              pattern: [1]
            },
            {
              durationMultiplier: 2.2,
              pattern: [2]
            },
            {
              durationMultiplier: 2.2,
              pattern: [3]
            },
            {
              durationMultiplier: 2.2,
              pattern: [4]
            },
            {
              durationMultiplier: 2.2,
              pattern: [5]
            },
            {
              durationMultiplier: 2.2,
              pattern: [6]
            },
            {
              durationMultiplier: 2.2,
              pattern: [7]
            },
            {
              durationMultiplier: 2.2,
              pattern: [6]
            },
            {
              durationMultiplier: 2.2,
              pattern: [5]
            },
            {
              durationMultiplier: 2.2,
              pattern: [4]
            },
            {
              durationMultiplier: 2.2,
              pattern: [3]
            },
            {
              durationMultiplier: 2.2,
              pattern: [2]
            },
            {
              durationMultiplier: 2.2,
              pattern: [1]
            }
          ],
          allowBaseColor: true,
          allowOnBuildups: true,
          onlyOnBuildups: false,
          reverseAllowed: false
        }
      ],
      colors: [
        {
          id: 0,
          primary: {
            r: 1.0,
            g: 0.0,
            b: 0.0
          },
          secondary: {
            r: 0.0,
            g: 0.0,
            b: 1.0
          }
        },
        {
          id: 1,
          primary: {
            r: 0.0,
            g: 1.0,
            b: 0.0
          },
          secondary: {
            r: 0.0,
            g: 0.0,
            b: 1.0
          }
        },
        {
          id: 2,
          primary: {
            r: 0.0,
            g: 1.0,
            b: 0.0
          },
          secondary: {
            r: 1.0,
            g: 0.0,
            b: 0.0
          }
        },
        {
          id: 3,
          primary: {
            r: 0.0,
            g: 0.0,
            b: 1.0
          },
          secondary: {
            r: 1.0,
            g: 0.0,
            b: 0.0
          }
        },
        {
          id: 4,
          primary: {
            r: 1.0,
            g: 0.0,
            b: 1.0
          },
          secondary: {
            r: 0.0,
            g: 0.5,
            b: 1.0
          }
        },
        {
          id: 5,
          primary: {
            r: 0.5,
            g: 0.0,
            b: 0.5
          },
          secondary: {
            r: 1.0,
            g: 1.0,
            b: 0.0
          }
        },
        {
          id: 6,
          primary: {
            r: 1.0,
            g: 1.0,
            b: 0.0
          },
          secondary: {
            r: 1.0,
            g: 0.25,
            b: 0.0
          }
        },
        {
          id: 0,
          primary: {
            r: 1.0,
            g: 0.0,
            b: 0.0
          },
          secondary: {
            r: 0.0,
            g: 0.0,
            b: 1.0
          }
        },
        {
          id: 1,
          primary: {
            r: 0.0,
            g: 1.0,
            b: 0.0
          },
          secondary: {
            r: 0.0,
            g: 0.0,
            b: 1.0
          }
        },
        {
          id: 2,
          primary: {
            r: 0.0,
            g: 1.0,
            b: 0.0
          },
          secondary: {
            r: 1.0,
            g: 0.0,
            b: 0.0
          }
        },
        {
          id: 3,
          primary: {
            r: 0.0,
            g: 0.0,
            b: 1.0
          },
          secondary: {
            r: 1.0,
            g: 0.0,
            b: 0.0
          }
        },
        {
          id: 4,
          primary: {
            r: 1.0,
            g: 0.0,
            b: 1.0
          },
          secondary: {
            r: 0.0,
            g: 0.5,
            b: 1.0
          }
        },
        {
          id: 5,
          primary: {
            r: 0.5,
            g: 0.0,
            b: 0.5
          },
          secondary: {
            r: 1.0,
            g: 1.0,
            b: 0.0
          }
        },
        {
          id: 6,
          primary: {
            r: 1.0,
            g: 1.0,
            b: 0.0
          },
          secondary: {
            r: 1.0,
            g: 0.25,
            b: 0.0
          }
        }
      ],
      colors2: [
        {
          primary: {
            r: 0.9372549019607843,
            g: 0.8705882352941177,
            b: 0.803921568627451
          },
          secondary: {
            r: 0.5725490196078431,
            g: 0.43137254901960786,
            b: 0.6823529411764706
          }
        },
        {
          primary: {
            r: 0.803921568627451,
            g: 0.5843137254901961,
            b: 0.4588235294117647
          },
          secondary: {
            r: 0.19607843137254902,
            g: 0.2901960784313726,
            b: 0.6980392156862745
          }
        },
        {
          primary: {
            r: 0.9921568627450981,
            g: 0.8509803921568627,
            b: 0.7098039215686275
          },
          secondary: {
            r: 0.9686274509803922,
            g: 0.3254901960784314,
            b: 0.5803921568627451
          }
        },
        {
          primary: {
            r: 0.47058823529411764,
            g: 0.8588235294117647,
            b: 0.8862745098039215
          },
          secondary: {
            r: 1,
            g: 0.6274509803921569,
            b: 0.5372549019607843
          }
        },
        {
          primary: {
            r: 0.5294117647058824,
            g: 0.6627450980392157,
            b: 0.4196078431372549
          },
          secondary: {
            r: 0.5607843137254902,
            g: 0.3137254901960784,
            b: 0.615686274509804
          }
        },
        {
          primary: {
            r: 1,
            g: 0.6431372549019608,
            b: 0.4549019607843137
          },
          secondary: {
            r: 0.6352941176470588,
            g: 0.6784313725490196,
            b: 0.8156862745098039
          }
        },
        {
          primary: {
            r: 0.9803921568627451,
            g: 0.9058823529411765,
            b: 0.7098039215686275
          },
          secondary: {
            r: 1,
            g: 0.2627450980392157,
            b: 0.6431372549019608
          }
        },
        {
          primary: {
            r: 0.6235294117647059,
            g: 0.5058823529411764,
            b: 0.4392156862745098
          },
          secondary: {
            r: 0.9882352941176471,
            g: 0.4235294117647059,
            b: 0.5215686274509804
          }
        },
        {
          primary: {
            r: 0.9921568627450981,
            g: 0.48627450980392156,
            b: 0.43137254901960786
          },
          secondary: {
            r: 0.803921568627451,
            g: 0.6431372549019608,
            b: 0.8705882352941177
          }
        },
        {
          primary: {
            r: 0.6745098039215687,
            g: 0.8980392156862745,
            b: 0.9333333333333333
          },
          secondary: {
            r: 0.9882352941176471,
            g: 0.9098039215686274,
            b: 0.5137254901960784
          }
        },
        {
          primary: {
            r: 0.12156862745098039,
            g: 0.4588235294117647,
            b: 0.996078431372549
          },
          secondary: {
            r: 0.7725490196078432,
            g: 0.8901960784313725,
            b: 0.5176470588235295
          }
        },
        {
          primary: {
            r: 0.6352941176470588,
            g: 0.6352941176470588,
            b: 0.8156862745098039
          },
          secondary: {
            r: 1,
            g: 0.6823529411764706,
            b: 0.25882352941176473
          }
        }
      ]
    }
  ]
};
