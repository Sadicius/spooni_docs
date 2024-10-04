export default {
  base: "/",
  title: "SPOONI Development",
  description: "SPOONI Development",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "64x64", href: "/logo.png", loading: "lazy" },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css",
        media: "print", onload: "this.media='all'"
      },
    ]
    
  ],
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "SPOONI Development",
    outline: "deep",
    nav: [
      { text: "Docs", link: "/docs" },
      { text: "MICO", link: "/mico" },
      { text: "Team", link: "/team" },
      { text: "Partner", link: "/partner" },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Spooni-Development' },
      { icon: 'discord', link: 'https://discord.gg/spooni' },
      { icon: 'youtube', link: 'https://www.youtube.com/@masterfighter2698' },
    ],
    sidebar: [
      {
        text: 'Mappings',
        collapsed: false,
        items: [

          { text: "Ambarino", collapsed: true, items:[
            {text: "🔸Hobbit House", link:'/doc_mappings/ambarino/spooni_hobbit_house'},
            {text: "🔸Moonstone Pond", link:'/doc_mappings/ambarino/spooni_moonstone_pond'},
            {text: "🔸Wapiti", link:'/doc_mappings/ambarino/spooni_wapiti'},
          ]},

          { text: "Lemoyne", collapsed: true, items:[
            {text: "Rhodes", collapsed: true, items: [
              {text: "🔸Caravan ", link:'/doc_mappings/lemoyne/spooni_rhodes_caravan'},
            ]},
            {text: "St. Denis", collapsed: true, items: [
              {text: "🔸Bakery & Florist", link:'/doc_mappings/lemoyne/spooni_sd_bakery_florist'},
              // {text: "🔸Brewery", link:'/doc_mappings/lemoyne/spooni_sd_brewery'},
              {text: "🔸Cart + Woodworker", link:'/doc_mappings/lemoyne/spooni_sd_cart_woodworker'},              
              {text: "🔸Church", link:'/doc_mappings/lemoyne/spooni_sd_church'},
              {text: "🔸Courthouse", link:'/doc_mappings/lemoyne/spooni_sd_courthouse'},
              {text: "🔸Farming", link:'/doc_mappings/lemoyne/spooni_sd_farming'},
              {text: "🔸Fight Club", link:'/doc_mappings/lemoyne/spooni_sd_fight_club'},
              // {text: "🔸Furniture", link:'/doc_mappings/lemoyne/spooni_sd_furniture'},
              {text: "🔸General Store", link:'/doc_mappings/lemoyne/spooni_sd_general_store'},
              {text: "🔸Hotel La Licorne", link:'/doc_mappings/lemoyne/spooni_sd_hotel_licorne'},
              {text: "🔸Jeweler", link:'/doc_mappings/lemoyne/spooni_sd_jeweler'},
              {text: "🔸Promenade", link:'/doc_mappings/lemoyne/spooni_sd_promenade'},
              // {text: "🔸Police Station", link:'/doc_mappings/lemoyne/spooni_sd_policestation'},
              // {text: "🔸Slums", link:'/doc_mappings/lemoyne/spooni_sd_slums'},
              {text: "🔸Spaldings", link:'/doc_mappings/lemoyne/spooni_sd_spaldings'},
              {text: "🔸Train Station", link:'/doc_mappings/lemoyne/spooni_sd_trainstation'},
              {text: "🔸Undertaker", link:'/doc_mappings/lemoyne/spooni_sd_undertaker'},
              {text: "🔸Villa 1", link:'/doc_mappings/lemoyne/spooni_sd_villa_1'},
              {text: "🔸Villa 2, 3 & 4", link:'/doc_mappings/lemoyne/spooni_sd_villa_2_3_4'},
              // {text: "🔸Villa 5", link:'/doc_mappings/lemoyne/spooni_sd_villa_5'},
              // {text: "🔸Warehouse", link:'/doc_mappings/lemoyne/spooni_sd_warehouse'},
            ]},
            {text: "🔸Bra Storage House", link:'/doc_mappings/lemoyne/spooni_bra_storage_house'},
            {text: "🔸Bra Worker Houses", link:'/doc_mappings/lemoyne/spooni_bra_worker_houses'},
            {text: "🔸Caliga Hall", link:'/doc_mappings/lemoyne/spooni_caliga_hall'},
            {text: "🔸Hagen Orchards", link:'/doc_mappings/lemoyne/spooni_hagen_orchards'},
          ]},

          { text: "New Austin", collapsed: true, items:[
            {text: "Armadillo", collapsed: true, items: [
              // {text: "🔸Armadillo Reborn", link:'/doc_mappings/new-austin/spooni_arm_reborn'},
            ]},
            // {text: "Tumbleweed", collapsed: true, items: [
            // ]},
            {text: "🔸Cholla Springs Alchemist", link:'/doc_mappings/new-austin/spooni_cho_alchemist'},
            {text: "🔸MacFarlane's Ranch", link:'/doc_mappings/new-austin/spooni_mac_farlanes_ranch'},
            {text: "🔸Rathskeller Fork", link:'/doc_mappings/new-austin/spooni_rathskeller_fork'},
            {text: "🔸Ridgewood Farm", link:'/doc_mappings/new-austin/spooni_ridgewood_farm'},
            {text: "🔸Thieves' Landing Distillery", link:'/doc_mappings/new-austin/spooni_thl_distillery'},
          ]},

          { text: "New Hanover", collapsed: true, items:[
            {text: "Annesburg", collapsed: true, items: [
              {text: "🔸Reborn 1", link:'/doc_mappings/new-hanover/spooni_ann_reborn'},
            ]},
            {text: "Valentine", collapsed: true, items: [
              {text: "🔸Church", link:'/doc_mappings/new-hanover/spooni_val_church'},
              {text: "🔸Castor Ridge", link:'/doc_mappings/new-hanover/spooni_castor_ridge'},
              {text: "🔸Law Office", link:'/doc_mappings/new-hanover/spooni_val_law_office'},
            ]},
            {text: "Van Horn", collapsed: true, items: [
              {text: "🔸Brothel House", link:'/doc_mappings/new-hanover/spooni_van_brothel_house'},
              {text: "🔸Stable House", link:'/doc_mappings/new-hanover/spooni_van_stable_house'},

            ]},
            {text: "🔸Bacchus Station", link:'/doc_mappings/new-hanover/spooni_bacchus_station'},
            {text: "🔸Cumberland Crest", link:'/doc_mappings/new-hanover/spooni_cumberland_crest'},
            {text: "🔸Dewberry Creek", link:'/doc_mappings/new-hanover/spooni_dewberry_creek'},
            {text: "🔸Emerald Ranch", link:'/doc_mappings/new-hanover/spooni_emerald_ranch'},
            {text: "🔸Fort Wallace", link:'/doc_mappings/new-hanover/spooni_fort_wallace'},
            {text: "🔸Greenbank Mill", link:'/doc_mappings/new-hanover/spooni_greenbank_mill'},
            {text: "🔸Oil Field Worker Houses", link:'/doc_mappings/new-hanover/spooni_oil_worker_houses'},
            {text: "🔸Tinkers Hill", link:'/doc_mappings/new-hanover/spooni_tinkers_hill'},
          ]},

          { text: "West Elizabeth", collapsed: true, items:[
            {text: "Blackwater", collapsed: true, items: [
              {text: "🔸Reborn 1", link:'/doc_mappings/west-elizabeth/spooni_bla_reborn'},
            ]},
            {text: "Strawberry", collapsed: true, items: [
              {text: "🔸Stable", link:'/doc_mappings/west-elizabeth/spooni_straw_stable'},
            ]},
            {text: "🔸Lone Mule Stead", link:'/doc_mappings/west-elizabeth/spooni_lone_mule_stead'},
            {text: "🔸Manzanita Post", link:'/doc_mappings/west-elizabeth/spooni_manzanita_post'},
            {text: "🔸Pronghorn Ranch", link:'/doc_mappings/west-elizabeth/spooni_pronghorn_ranch'},
            {text: "🔸Valley View Ranch", link:'/doc_mappings/west-elizabeth/spooni_valley_view_ranch'},
            {text: "🔸Windmill Ridge", link:'/doc_mappings/west-elizabeth/spooni_windmill_ridge'},

          ]},

          
          { text: "Other", collapsed: true, items:[
            {text: "🔸Secret Cellar", link:'/doc_mappings/other/spooni_secretcellar'},
          ]},
        
        ]
      },
      {
          text: 'Scripts',
          collapsed: false,
          items: [
            // { text: "💀 Blackmarket", link:'/doc_scripts/spooni/spooni_blackmarket' },
            { text: "🏠 Build my Home", link:'/doc_scripts/spooni/spooni_build_my_home' },
            { text: "🏨 Hotel", link:'/doc_scripts/spooni/spooni_hotel' },
            { text: "🪑 Interactions", link:'/doc_scripts/spooni/spooni_interactions' },
            { text: "📍 Job Blips", link:'doc_scripts/spooni/spooni_job_blips' },
            { text: "🧩 Prop Loader", link:'doc_scripts/spooni/spooni_prop_loader' },
            { text: "💻 Spooner", link:'doc_scripts/spooni/spooni_spooner' },
            { text: "🌱 VegMod", link:'doc_scripts/spooni/spooni_vegmod' },
            { text: "🛞 Vehicle Loader", link:'doc_scripts/spooni/spooni_vehicle_loader' },
            // { text: "🎄 Xmas", link:'/doc_scripts/spooni/spooni_xmas' },

            { text: "DrShwaggins Scripts", collapsed: true, items:[
              { text: "💵 Billing", link:'doc_scripts/drshwaggins/dl_advancedbilling' },
              { text: "🏪 Stores", link:'doc_scripts/drshwaggins/dl_advancedstores' },
              { text: "🎥 Cutscenes", link:'doc_scripts/drshwaggins/dl_cutscenes' },
              { text: "💾 DB Backup", link:'doc_scripts/drshwaggins/dl_dbbackup' },
              { text: "🍊 Farmroutes", link:'doc_scripts/drshwaggins/dl_farmroutes' },
              { text: "🪓 Lumberjack", link:'doc_scripts/drshwaggins/dl_lumberjack' },
              { text: "🧮 Society", link:'doc_scripts/drshwaggins/dl_society' },
              { text: "📦 Storages", link:'doc_scripts/drshwaggins/dl_storages' },
              { text: "⚔️ Whitelist", link:'doc_scripts/drshwaggins/dl_questionwhitelist' },
            ]},
          ]
      },
    ],
    footer: {
      message: "Released under the GNU General Public License v3.0.",
      copyright: 'Copyright © 2022 SPOONI Development',
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      },
      chunkSizeWarningLimit: 1000,
      minify: 'terser',
      cache: true
    },    
  },
};
