import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiles-page',
  templateUrl: './tiles-page.component.html',
  styleUrls: ['./tiles-page.component.scss']
})
export class TilesPageComponent implements OnInit {
  pictures: {}[];
  floor: {}[];
  polished:{} [];
  glazed: { }[];
  matt: { }[];
  showImages = [];
  showImages1: [];

  constructor() { }

  ngOnInit(): void {
    this.pictures = [{
      name: "assets/tiles/2006.jpg",
      num: "#2006",
      images: [{
        name: "assets/tiles/2006_tile.jpg",
        num: "#2006"
      },
      {
        name: "assets/tiles/2006_tile.jpg",
        num: "#2006"
      }
      ]
    },
    {
      name: "assets/tiles/2007.jpg",
      num: "#2007",
      images: [{
        name: "assets/tiles/2007_tile.jpg",
        num: "#2007"
      },
      {
        name: "assets/tiles/2007_tile.jpg",
        num: "#2007"
      }
      ]
    },
    {
      name: "assets/tiles/2001.jpg",
      num: "#2001",
      images: [{
        name: "assets/tiles/2001_tile image.jpg",
        num: "#2001"
      },
      {
        name: "assets/tiles/2001_tile image.jpg",
        num: "#2001"
      }
      ]
    },
    {
      name: "assets/tiles/2002.jpg",
      num: "#2002",
      images: [{
        name: "assets/tiles/2002_tile.jpg",
        num: "#2002"
      },
      {
        name: "assets/tiles/2002_tile.jpg",
        num: "#2006"
      }
      ]
    },
    {
      name: "assets/tiles/2005.jpg",
      num: "#2005",
      images: [{
        name: "assets/tiles/2005_walltile.jpg",
        num: "#2005"
      },
      {
        name: "assets/tiles/2005_walltile.jpg",
        num: "#2005"
      }
      ]
    },
    {
      name: "assets/tiles/2004.jpg",
      num: "#2004",
      images: [{
        name: "assets/tiles/2004_tile.jpg",
        num: "#2004"
      },
      {
        name: "assets/tiles/2004_tile.jpg",
        num: "#2004"
      }
      ]
    }
    ],
      this.floor = [{
        name: "assets/tiles/96006.jpg",
        num: "#6006",
        images: [{
          name: "assets/tiles/96006_tile.jpg",
          num: "#6006"
        },
        {
          name: "assets/tiles/96006_tile.jpg",
          num: "#6006"
        }
        ]

      },
      {
        name: "assets/tiles/96007.jpg",
        num: "#6007",
        images: [{
          name: "assets/tiles/96007img.jpg",
          num: "#6007"
        },
        {
          name: "assets/tiles/96007img.jpg",
          num: "#6007"
        }
        ]
      },
      {
        name: "assets/tiles/96001.jpg",
        num: "#6001",
        images: [{
          name: "assets/tiles/96001_tile.jpg",
          num: "#6001"
        },
        {
          name: "assets/tiles/96001_tile.jpg",
          num: "#6001"
        }
        ]
      },
      {
        name: "assets/tiles/96026.jpg",
        num: "#6026",
        images: [{
          name: "assets/tiles/96026_tiles.jpg",
          num: "#6026"
        },
        {
          name: "assets/tiles/96026_tiles.jpg",
          num: "#6026"
        }
        ]
      },
      {
        name: "assets/tiles/96036.jpg",
        num: "#6036",
        images: [{
          name: "assets/tiles/96036_tile.jpg",
          num: "#6036"
        },
        {
          name: "assets/tiles/96036_tile.jpg",
          num: "#6036"
        }
        ]
      },
      {
        name: "assets/tiles/96014.jpg",
        num: "#6014",
        images: [{
          name: "assets/tiles/96014_tile.jpg",
          num: "#6014"
        },
        {
          name: "assets/tiles/96014_tile.jpg",
          num: "#6014"
        }
        ]
      }
      ],
      this.polished = [{
        name: "assets/tiles/6107.jpg",
        num: "#6107",
        images: [{
          name: "assets/tiles/6107_tilesimage.jpg",
          num: "#6107"
        },
        {
          name: "assets/tiles/6107_tilesimage.jpg",
          num: "#6107"
        }
        ]
      },
      {
        name: "assets/tiles/6122.jpg",
        num: "#6122",
        images: [{
          name: "assets/tiles/6122_tileimage.jpg",
          num: "#6122"
        },
        {
          name: "assets/tiles/6122_tileimage.jpg",
          num: "#6122"
        }
        ]
      },
      {
        name: "assets/tiles/6123.jpg",
        num: "#6123",
       images:[{
        name: "assets/tiles/6123_imagetiles.jpg",
        num: "#6123"
       },
      {
        name: "assets/tiles/6123_imagetiles.jpg",
        num: "#6123"
      }]
      },
      {
        name: "assets/tiles/6817.jpg",
        num: "#6817",
        images:[{
          name: "assets/tiles/6817_img.jpg",
          num: "#6187"
         },
         {
          name: "assets/tiles/6817_img.jpg",
          num: "#6187"
         }
        ]
      },
      {
        name: "assets/tiles/6902.jpg",
        num: "#6902",
        images:[{
          name: "assets/tiles/6902_img.jpg",
          num: "#6902"
         },
         {
          name: "assets/tiles/6902_img.jpg",
          num: "#6902"
         }
        ]
      },
      {
        name: "assets/tiles/6906.jpg",
        num: "#6906",
        images:[{
          name: "assets/tiles/6906_imgtiles.jpg",
          num: "#6906"
         },
         {
          name: "assets/tiles/6906_imgtiles.jpg",
          num: "#6906"
         }
        ]
      }
      ],
      this.glazed = [{
        name: "assets/tiles/72002.jpg",
        num: "#72002",
        images:[{
          name: "assets/tiles/72002_tileimage.jpg",
          num: "#72002"
         },
         {
          name: "assets/tiles/72002_tileimage.jpg",
          num: "#72002"
         }
        ]

        
        
      },
      {
        name: "assets/tiles/72003.jpg",
        num: "#72003",
        images:[{
          name: "assets/tiles/72003_tileimage.jpg",
          num: "#72003"
         },
         {
          name: "assets/tiles/72003_tileimage.jpg",
          num: "#72003"
         }
        ]
        
      },
      {
        name: "assets/tiles/72004.jpg",
        num: "#72004",
        images:[{
          name: "assets/tiles/72004img.jpg",
          num: "#72004"
         },
         {
          name: "assets/tiles/72004img.jpg",
          num: "#72004"
         }
        ]
      },
      {
        name: "assets/tiles/72006.jpg",
        num: "#72006",
        images:[{
          name: "assets/tiles/72006_tileimage.jpg",
          num: "#72006"
         },
         {
          name: "assets/tiles/72006_tileimage.jpg",
          num: "#72006"
         }
        ]
      },
      {
        name: "assets/tiles/72007.jpg",
        num: "#72007",
        images:[{
          name: "assets/tiles/72007_tileimage.jpg",
          num: "#72007"
         },
         {
          name: "assets/tiles/72007_tileimage.jpg",
          num: "#72007"
         }
        ]
      },
      {
        name: "assets/tiles/72008.jpg",
        num: "#72008",
        images:[{
          name: "assets/tiles/72008_tileimage.jpg",
          num: "#72008"
         },
         {
          name: "assets/tiles/72008_tileimage.jpg",
          num: "#72008"
         }
        ]
      }
      ],
     
      this.matt = [{
        name: "assets/tiles/96014.jpg",
        num: "#96014",
        images:[{
          name: "assets/tiles/96014_tile.jpg",
          num: "#96014"
         },
         {
          name: "assets/tiles/96014_tile.jpg",
          num: "#96014"
         }
        ]
        
      },
      {
        name: "assets/tiles/96019.jpg",
        num: "#96019",
        images:[{
          name: "assets/tiles/96019_tiles.jpg",
          num: "#96019"
        },
        {
          name: "assets/tiles/96019_tiles.jpg",
          num: "#96019"
        }]
      },
      {
        name: "assets/tiles/96029.jpg",
        num: "#96029",
        images:[{
          name: "assets/tiles/96029_tiles.jpg",
          num: "#96029"
        },
        {
          name: "assets/tiles/96029_tiles.jpg",
          num: "#96029"
        }]
      },
      {
        name: "assets/tiles/96016.jpg",
        num: "#96016",
        images:[{
          name: "assets/tiles/96016_tiles.jpg",
          num: "#96016"
        },
        {
          name: "assets/tiles/96016_tiles.jpg",
          num: "#96016"
        }]
      },
      {
        name: "assets/tiles/96035.jpg",
        num: "#96035",
        images:[{
          name: "assets/tiles/96035_tiles.jpg",
          num: "#96035"
        },
        {
          name: "assets/tiles/96035_tiles.jpg",
          num: "#96035"
        }]
      },
      {
        name: "assets/tiles/96025.jpg",
        num: "#96025",
        images:[{
          name: "assets/tiles/96025_tiles.jpg",
          num: "#96025"
        },
        {
          name: "assets/tiles/96025_tiles.jpg",
          num: "#96025"
        }]
      }
      ]
  }
  openImages(item) {
    this.showImages = item.images;
    console.log(this.showImages)
  }

}
