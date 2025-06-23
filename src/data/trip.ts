import {
  type Trip,
  type Step,
  type Country,
  type Continent,
  type MediaType,
  CustomSlidesType
} from '/@/types/trip'

import auflag from '/@/assets/TheBigTrip/flags/au-flag.png'
import czflag from '/@/assets/TheBigTrip/flags/cz-flag.png'
import hiflag from '/@/assets/TheBigTrip/flags/hi-flag.png'
import laflag from '/@/assets/TheBigTrip/flags/la-flag.png'
import njflag from '/@/assets/TheBigTrip/flags/nj-flag.png'
import nyflag from '/@/assets/TheBigTrip/flags/ny-flag.png'
import slflag from '/@/assets/TheBigTrip/flags/sl-flag.png'
import paflag from '/@/assets/TheBigTrip/flags/pa-flag.png'
import deflag from '/@/assets/TheBigTrip/flags/de-flag.png'
import usflag from '/@/assets/TheBigTrip/flags/us-flag.png'
import etflag from '/@/assets/TheBigTrip/flags/et-flag.png'
import skflag from '/@/assets/TheBigTrip/flags/sk-flag.png'

import duflag from '/@/assets/TheBigTrip/flags/du-flag.jpg'
import jpflag from '/@/assets/TheBigTrip/flags/jp-flag.jpg'
import euflag from '/@/assets/TheBigTrip/flags/eu-flag.jpg'
import ilflag from '/@/assets/TheBigTrip/flags/il-flag.jpg'

export const trip: Trip = {
  continents: [
    {
      name: 'Asia',
      bgImage: jpflag,
      countries: [
        {
          name: 'Israel',
          bgImage: ilflag,
          steps: [
            {
              id: 1,
              name: 'נתב"ג',
              shortName: 'TLV',
              date: '2024-10-27',
              degrees: '30',
              description: '<p>עברתי ב-״דרך צלחה״ וקיבלתי 200₪ מהבנק.</p>',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/EADD4F97-4D8C-4A0D-B926-7C45CDD1557B_570EA01D-A923-44DA-96E8-93520F144CB9.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/EADD4F97-4D8C-4A0D-B926-7C45CDD1557B_570EA01D-A923-44DA-96E8-93520F144CB9.jpg'
            }
          ]
        },
        {
          name: 'Ethiopia',
          bgImage: etflag,
          steps: [
            {
              id: 2,
              name: 'Addis Ababa',
              shortName: 'Addis Ababa',
              date: '2024-10-27',
              degrees: '22',
              description: `<p>התחנה הבאה: יפ- אה, כלומר… אתיופיה 🇪🇹👳🏿‍♂️.</p><p>קיבלתי חדר במלון חביב שאסור לי לצאת ממנו להסתובב בחוץ כי מסוכן, אז מצאתי ישראלים ושיחקנו קאבו. חבל, כי העיר עצמה יפה בהחלט.</p><p>התחבורה הציבורית פה יעילה מאוד בזכות היעדר הרמזורים ופירוק ידיות האיתות ברכבים; בדרך זו מבטיחים שכל נהג יוכל להיכנס לכל נתיב מבלי להאט או לעצור לרכבים אחרים, ובכך להגיע למחוז חפצו באופן המהיר ביותר. החסרון: מחוז חפצו נוטה להיות אשפוז במחלקה פנימית ג׳.</p><p>בתמונה האחרונה: השקיעו כספכם בבולבול(ה).</p><p>השקעתי.</p>`,
              media: [
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2550F117-39A2-41B6-9BCC-283E289797F6_775EDC1D-8E2A-4EDE-AE65-6275866BD4B2.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/49102eb3-cb69-4f79-97fa-da2f133a7de0_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/FE6AEB59-A87E-49AF-9AEF-4888C5E3A621_5909964A-D732-49FA-9C08-4E50B3CE646E.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/8462bd82-364b-4b3f-ac2f-ede5f9dc65d5_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B2DDBC29-B662-4AA5-A2A0-71811D5C1A23_3CADFBDA-83C5-48AE-BB71-5E15A0FEE9BB.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/ee441e2d-3ee8-4b43-a6a1-dd2de36befcc_video'
                }
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2550F117-39A2-41B6-9BCC-283E289797F6_775EDC1D-8E2A-4EDE-AE65-6275866BD4B2.jpg'
            }
          ]
        },
        {
          name: 'South Korea',
          bgImage: skflag,
          steps: [
            {
              date: 'October 28, 2024',
              degrees: '21°',
              name: 'Seoul',
              shortName: 'Seoul',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2905155C-8817-427E-8F4E-042F7FD0B667_F3587B93-379D-413E-B0F1-C5E0726D0DF6.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/85E26C53-B2A1-4124-8B73-407595A855E9_487060BB-52AE-4E29-828E-7E3CECF39DEA.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2BF6BA7C-4AFA-4A53-B9EE-FE2ED4D7386A_32328C30-77A2-4BD3-A025-AB54544E06DA.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2905155C-8817-427E-8F4E-042F7FD0B667_F3587B93-379D-413E-B0F1-C5E0726D0DF6.jpg',
              description: `<p>עצירה קטנטושה בסיאול.</p><p>בתמונה הראשונה: המטוס ממריא בכיוון ההפוך מכיוון היעד.</p><p>בתמונה השנייה: אין דרך לקרוא את זה במבטא שאינו אתיופי / הודי.</p><p>בתמונה השלישית: אני אנרכיסט.</p><p>יאללה תחנה הבאה יפן 🥳🥳🤩</p>`,
              id: 3
            }
          ]
        },
        {
          name: 'Japan',
          bgImage: jpflag,
          steps: [
            {
              date: 'October 29, 2024',
              degrees: '21°',
              name: 'Akihabara, Tokyo',
              shortName: 'Akihabara',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4C440683-8FAC-4420-83A5-81DBCA69D952_4F5CAA90-5611-403D-ACE6-CC916A8F70DA.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/40175D66-CA65-4C66-A078-E473251BF11D_98A8C0EA-CE6E-48AE-ABD6-45B1F5A7FE66.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4D8B07F2-07B2-4B3F-BA7F-6CC94EAAF4E2_F0CE5377-3019-4467-975A-4871C7F94197.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/34B347BA-C49C-4135-B130-4BE68027F041_FA153120-7872-4E2F-A413-9027B30826F5.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/48AE9FF6-B49E-4D63-BAD3-9CD65B7D66AB_B32C8368-5794-43B6-96CA-BC78CC5B046F.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/120549C9-B714-4241-9802-ADC5E9B731D7_FF44E710-26D6-421E-8EE3-3706A1740259.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4C440683-8FAC-4420-83A5-81DBCA69D952_4F5CAA90-5611-403D-ACE6-CC916A8F70DA.jpg',
              description: `<p>אז מהיום הראשון אין לי יותר מדי תמונות, אבל החוויות נחמדות מאוד. היפנים יותר חמים וחביבים משציפיתי; המלון (קפסולות ב-150₪ ללילה) מציע יותר משהייתי מצפה, לרבות ג׳קוזי במלתחות ושתייה חמה וקרה חופשית; והאוכל מדהים, כמובן כמצופה מיפן. מה שכן, הם פחות מסודרים משציפיתי - איזה טמבל אחד בטח התבלבל וסידר בטעות את כיוון העלייה במדרגות בצד שמאל במקום ימין.</p><p>יעפת נראה שלא קיבלתי, כנראה בזכות הטיסות הארוכות - אבל כן יצא לי לישון 5 שעות, להתעורר לשעה, ולישון לעוד 5 שעות רצוף. התעוררתי ערני בפעם הראשונה מזה הרבה זמן.</p><p>היום עשיתי בעיקר קניות טקסטיל; את מחר אקדיש יותר לקולינריה ובילויים ליליים. התחנה הבאה: הקבב של משה-סאן.</p>`,
              id: 4
            },
            {
              date: 'October 31, 2024',
              degrees: '21°',
              name: 'Chiyoda',
              shortName: 'Chiyoda',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/055B5006-42CA-4F47-BE5B-8FB9D0CF42B4_D9A6ACE8-60E3-493F-A308-C035571A8C29.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D2CE4427-7ED9-4B67-9491-9E2EA161BD17_8BD92524-36D1-4A54-8053-18230B0872B6.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/281DC3EE-25A4-4D45-B5BE-FA60EDF08110_4A926C7C-88C1-444E-9A37-B3A7CAB04879.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/04061A64-5E7B-42BC-8C4D-8D6F5FFA5EC8_9FECEA15-F254-4560-9864-BA836A23B4B7.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/04061A64-5E7B-42BC-8C4D-8D6F5FFA5EC8_9FECEA15-F254-4560-9864-BA836A23B4B7.jpg',
              description: `<p>רשימת הדברים ההפוכים ביפן עד כה:</p><ul>  <li>נוהגים בצד שמאל.</li>  <li>עולים במדרגות בצד שמאל.</li>  <li>הרמזורים אופקיים.</li>  <li>החנויות אנכיות (כלומר יש הרבה קומות אבל כל קומה תופסת שטח קטן).</li>  <li>הברזים… המים הקרים לפעמים בצד ימין ולפעמים בצד שמאל, מוזר שאין אחידות.</li>  <li>אנשים יגידו שהם לא יודעים אנגלית, אבל כשאזרוק להם שאלה ביפנית (״איך מגיעים למספרה של שלומי?״) הם יעשו את מיטב המאמצים לעזור לי, לרבות לדבר באנגלית המעטה שהם יודעים (ולפעמים היא לא כל כך מעטה).</li></ul><p>ועתה פריקה מהלב: כשיצאתי לטיול, חשבתי שאני עושה טעות בכך שאני יוצא לטיול שאינו מתוכנן בשום צורה (את הכרטיסים למלון למשל קניתי בשדה התעופה באדיס אבבה); עתה אני חושב שעשיתי את הדבר הנכון ביותר עבורי. יש ביפן כל כך הרבה מה לעשות, חנויות בכל פינה (וכאמור הן אנכיות, אז אפשר לבלות הרבה זמן בפינה אחת), אוכל בכל מקום, פאבים, תרבות, אנשים… שזו בעצם הסיבה שיצאתי לטיול הזה. לו הייתי מתכנן הכל עד לפרטים הכי קטנים, לא הייתי יכול באמת לדעת כמה זמן שינה אצטרך להקדיש (או לא להקדיש) לג׳ט לג, לא הייתי יודע כמה זמן להקדיש לכל חנות, לא הייתי יכול להצטרף בכזו ספונטניות לפאב עם בחור שהכרתי במעלית של המלון שלנו… אז נכון לעכשיו אני שמח שאני יכול לעשות הכל בקצב שלי - להתעורר יקיצה טבעית, לבלות בחנויות עד שאני ממצה אותן, ולהכיר אנשים באופן ספונטני ולחוות איתם חוויות 😊.</p>`,
              id: 5
            },
            {
              date: 'October 31, 2024',
              degrees: '23°',
              name: 'Shibuya',
              shortName: 'Shibuya',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/FBE4E9FB-5121-469E-8C3D-921406A80FE9_3D57D67D-CB65-4A26-AF93-8CE07D67D28B.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D1223EE4-E9EC-4C21-9D35-361936CE8E46_815856EA-3E91-4633-9C81-A36B9109082B.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/FBE4E9FB-5121-469E-8C3D-921406A80FE9_3D57D67D-CB65-4A26-AF93-8CE07D67D28B.jpg',
              description: `<p>יצאנו הערב לבלות ברובע שיבויה שבטוקיו לכבוד ליל כל הקדושים. בשנים שעברו היו פה פעילויות נרחבות בתקופה הזו של השנה, והן גרמו להרבה כאוס ופסולת שפינויה דרש מאמצים רבים וגרם לתלונות רבות; לכן, החל מלפני שנה, הפעילויות ברובע זה מבוטלות, והרשויות מעודדות את האנשים *לא לצאת* לרחובות הרובע הנ״ל. כל זאת לא מנע מאלפי האנשים שראיתי שם היום לצאת, להתחפש, ולהסתובב עם יקיריהם ברחובות.</p><p>בתמונה השנייה: אלטרנטיבה מקורית לכיתוב 18:00-05:00 באופן שמבהיר שמדובר בשעות 6 בערב עד 5 לפנות בוקר (ולא 5 לפנות בוקר עד 6 בערב).</p>`,
              id: 6
            },
            {
              date: 'November 1, 2024',
              degrees: '23°',
              name: 'Tokyo Tower',
              shortName: 'Tokyo Tower',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B823164C-01B2-4C65-870B-FA7B304BB67E_909D6A66-396B-4547-899F-C4F89904AA31.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/93F8ED28-5E23-470B-9CD2-86F5BC29C779_FEF80BA1-070A-47F7-A1CE-2818635DB120.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2DC313D8-F9B0-44E1-A441-6F6592D28F1F_30B6921C-B605-4AEC-A310-B6E4545F159A.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/40F91E7F-3FD9-4089-840F-B6728AD10ACF_BAB1F587-8F6A-4CAC-904C-89089B511364.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4F4B3AA1-77F7-47C3-A2E8-0EACB80D637D_F096507B-A960-45A9-A5B5-3E1AF50E4859.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B3AE7477-CEAA-4E8C-914D-590BD8FEFC9A_51C59478-D8DB-46DC-AFAE-E4756B4C5864.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/1facc297-b109-4c9e-b45b-e4409727a9db_video'
                }
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B823164C-01B2-4C65-870B-FA7B304BB67E_909D6A66-396B-4547-899F-C4F89904AA31.jpg',
              description: `<p>בתמונה הראשונה: הארמון המלכותי (שניתן להיכנס אליו רק פעמיים בשנה: בראש השנה, ובמומולדת של הקיסר).</p><p>תמונות 2-3: מקדש בודהיסטי (עם הסמל המפורסם שסימל שלום ומזל טוב הרבה לפני שצורר אחד ספציפי עיוות זאת).</p><p>תמונות 4-6: מגדל טוקיו, הדומה בצורתו למגדל אייפל אך גבוה ממנו בשבעה מטרים. ננה בננה צרפתים.</p><p>מסקנה עד כה: אל תשתו מים באתיופיה.</p>`,
              id: 7
            },
            {
              date: 'November 3, 2024',
              degrees: '22°',
              name: 'Shinjuku',
              shortName: 'Shinjuku',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CB4ED4A4-5CFF-488C-A4AD-8ED4C519D0E5_5A58EEA9-6B6D-4A4F-8142-CE37EC26DDFB.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CD410018-1AF2-4F1E-9183-1A7017236B71_54F33270-07ED-46DA-BA5D-3781C5C32ACC.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7413C20F-47F4-4F8A-82FE-E29426A23C19_AC916A1C-7A57-4280-A3CD-1D480862474E.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/68EC90C0-9DCD-48B4-8CF5-E4DDCB86063E_83BC9AF4-7C74-44E6-83ED-DA281AF2BEE2.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/FBC21586-2257-47E9-9C18-DB60F668D20C_46E0781F-A724-4B77-9594-CD0C033BCAAE.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/FBC21586-2257-47E9-9C18-DB60F668D20C_46E0781F-A724-4B77-9594-CD0C033BCAAE.jpg',
              description: `<p>אז ככה: כשהזמנתי לינה בטוקיו, הזמנתי ל-4 לילות בלבד כי חשבתי שאולי ארצה לישון באזורים שונים בטוקיו בהמשך, לראות נופים שונים ואנשים שונים. בפועל גיליתי שבזמן ״יום התרבות״ השנתי שלהם, אשר התרחש אתמול, המלונות מפוצצים עד אפס מקום - כך שבעצם עד 7 בערב לא ידעתי איפה אני ישן והייתי מוכן לישון ברחוב (מנהג שלמען האמת די שכיח ביפן). באזור 7 ראיתי שהתפנה חדר במלון באזור שינג׳וקו, אזור שידעתי מראש שארצה לבקר בו, אז קפצתי על המציאה ולקחתי חדר. להלן רשימה חלקית של ה-facilities במלון:</p><ul>  <li>אלכוהול חופשי בשעות הערב.</li>  <li>מרק מיסו חופשי במהלך היום.</li>  <li>כורסאות מסאז׳.</li>  <li>בריכה חמה שלא תבייש את חמת גדר.</li></ul><p>אה, כן… ומדובר במלון כוכב אחד. אני כמעט מתפתה לקחת לילה במלון 5 כוכבים רק כדי לראות מה כבר יכול להיות יותר טוב 😜.</p><p>היום עשיתי לעצמי יום קניות שלם. קרוביי יודעים שמעולם לא אהבתי קניות, ומסתבר שאהדה שכזו לא התפרצה פתאום ביפן… אבל היי, לפחות מצאתי חנות עם סקציה שלמה של דברים של סוניק 😄</p><p>בתמונה הראשונה: מנה במסעדה שמגיעה על מגש מתכת לוהט עם בשר נא שאני מחליט בעצמי על מידת העשייה שלו ובכך אוכל אותו הכי טרי שאפשר. 20₪.</p><p>בתמונה השנייה: סכו״ם שיעלה לאבא שלי חיוך קל על הפנים.</p><p>בתמונה השלישית: אלכוהול חינם.</p><p>בתמונה הרביעית: זו המלתחה של המלון הקודם שהייתי בו, שהצלחתי ממש במקרה לתפוס ריקה ולצלם רגע לפני שיצאתי ממנו.</p><p>בתמונה החמישית: כן אמא, סוניק זה גם לילדים גדולים. בעצם לא ״גם״ - בחנות הזו בכלל לא היו חולצות לילדים. המידות התפרשו בין מדיום לאקסטרה לארג׳.</p>`,
              id: 8
            },
            {
              date: 'November 4, 2024',
              degrees: '20°',
              name: 'TeamLab',
              shortName: 'TeamLab',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/EC22396E-494C-4F68-8590-2377A1A1C7AD_8F0B5FD0-3E5E-4C8E-9ACF-B2B7A0942B3E.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9D5DDFB4-6C6B-4D6F-954B-709D29C7D4BC_D5762A1E-91BD-4F3E-8799-D81594A66356.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7FEB8350-E436-471D-BE26-C30127DFFECB_578519A2-90C4-4A49-9AF2-A6CE471A6F8E.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/61a34189-c332-4ee7-b976-2da37d66940f_video'
                },

                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D71E7B10-B6E1-4C1D-9792-98CB099A26A3_3B16197F-218F-4D0B-97E0-48F5855223A6.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9C7C4BA2-B2F1-4FBF-BA43-7FC2033C0AB5_D9C71A62-373D-4387-9495-D979CFF0631E.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/30318FB1-6F3F-4FFF-9619-53AEEB4DAAC9_0C0F0DCC-7E08-416F-8E9A-27F3809B8E9E.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7B13B71C-15EE-492B-BD82-C85290361353_5CAD8B09-DD64-44D3-B0D7-C8FEAE1A8B37.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/BD270E9B-F473-4BE2-8075-3E8F4BF564AC_B4519687-011D-4F00-BCED-720B193EFE07.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/5ff1c342-d31d-4272-be5c-fb678581adec_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/FD7BCA82-2D28-4242-A824-29764882BAB6_32CF58ED-55DF-4AE0-829A-C545C6FBA4F0.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/40ae6cf1-5857-442e-ba37-441e7d89e131_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/03D67018-2B0D-49D3-B931-1A6D055D2CAA_81E4255E-7B5A-44CA-B958-BADC9D9C7293.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/AE5D6E80-77FE-40E0-88F1-C74DA9801D90_CBDF0600-AB77-43C9-A9ED-398B61AD2A12.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/EC22396E-494C-4F68-8590-2377A1A1C7AD_8F0B5FD0-3E5E-4C8E-9ACF-B2B7A0942B3E.jpg',
              description: `<p>היום הייתי ב-TeamLab, שזה אוסף קטן אך מרשים של מיצגים אמנותיים רב-חושיים. כל מיצג התרחש בחדר אחר שמוקדש כולו למיצג (מהרצפה ועד התקרה). צילמתי חלק מהם. בנוסף הייתי במקדש חביב שמהווה את שתי התמונות האחרונות, ואכלתי במסעדה שחיכיתי לה בערך שעה בתור, ו… זה היה שווה כל רגע. מנת בשר מהטעימות שאכלתי בחיי.</p>`,
              id: 9
            },
            {
              date: 'November 5, 2024',
              degrees: '16°',
              name: 'LaQua / Shibuya',
              shortName: 'LaQua',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/FFCE0807-469D-4A12-875E-F9C3DF67003F_BB9DC293-2050-4E50-B21F-CC75C8248628.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/FFCE0807-469D-4A12-875E-F9C3DF67003F_BB9DC293-2050-4E50-B21F-CC75C8248628.jpg',
              description: `<p>הקדשנו את היום האחרון שלנו בטוקיו (לבינתיים) לספא. בעצם הקדשנו רק חצי יום, וזו הייתה טעות; בפעם הבאה שאגיע (ותהיה פעם הבאה) זה יהיה ליום שלם, כי זה היה נפלא. מדובר במתחם גדול של אונסנים (מעיינות חמים) בעלי תכונות שונות - אחד למים חמים, אחד למים חמים מאוד, אחד ג׳קוזי, אחד עם מלחים למיניהם, אחד עם מים קרים ואחד עם מים קרים מ א ו ד, חלק בתוך המבנה וחלק בחוץ באוויר הפתוח… בכל אחד נכנסים בין 5-10 אנשים, ואנחנו רשאים להסתובב בין כולם כאוות נפשנו.</p><p>מעבר לאונסנים היו אפשרויות מרגוע שונות, ובין היתר מסאז׳ים למיניהם. ביקשתי מסאז׳ מכירופרקט - זה היה מאוד מקצועי, ומאוד מקל על הכאבים שלי באופן כללי. לפני המסאז׳ הייתי צריך למלא טופס, ובין היתר להקיף את רמת הקושי שאני רוצה מתוך קל/בינוני/חזק… אז כמובן שלקחתי את העט, הוספתי ליד ה-״חזק״ אופציה של ״יותר חזק״ והקפתי אותה. המסאז׳יסט צחק.</p><p>באופן כללי אני עושה פה כל מיני בדיחות שטויות שכאלו ונראה שהיפנים די נהנים מהן… וגם אם לא, גם אם הם נחמדים מכדי להגיד לי שאני נראה כמו מטומטם בעיניהם, לפחות הם יודעים לחייך ולצחוק מהדברים הקטנים האלו 😊 יצא לי גם ללמד את הספר שצבע את השיער שלי שבניגוד ליפן, שבה כדי להגיד תודה קדים קידה קלה ואומרים ״אריגאטו גוזאימס״, בישראל כשאומרים תודה לוחצים ידיים ואומרים ״תודה רבה״. הוא לחץ לי את היד ואמר ״תודה רבה״ במבטא יפני, ונראה כאילו הוא היה משועשע מהסיטואציה… אפילו עשה לי הנחה על הצביעה של השיער.</p><p>בערב אכלנו במסעדה עם ג׳ייסון, צעיר סיני שפגשנו במלון ובילינו איתו יומיים בטוקיו, ואחר כך הלכנו לבר וחגגנו את הערב האחרון שלנו ביחד לפני שהוא חוזר להונג קונג ואנחנו ממשיכים לעיר השנייה שלנו ביפן - ״האקונה״.</p>`,
              id: 10
            },
            {
              date: 'November 7, 2024',
              degrees: '17°',
              name: 'Hakone',
              shortName: 'Hakone',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/6B3E2DB8-7058-489A-9BB1-A6110BE972C6_15373184-7E42-4427-9AAB-45F684FD057D.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9E626D2E-E22A-405A-AD42-F36027134D41_1787C089-A9B1-4D27-B6D5-2BA66874A5B0.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/A3B6C6A3-A16E-4819-BEDA-23C4A2D8B3A3_E9089F18-C688-4D8E-B68C-35EA97578C44.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CC2E07C8-6E92-4843-A977-2F26C455C04F_C8591675-3C05-45BF-ABBE-8737F0C9836A.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5C5DF0CA-020B-47D9-BCDE-A73E499AE05A_28083BA2-D953-448C-8C41-1A8AF4199267.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2E8C9E21-F77A-4EC7-97D9-333EF8B77C2F_162133E7-D39F-4A81-A4E2-197C3701E711.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/E5E34E5D-A54A-452B-A2B2-89B65E32CE67_A8E14BFA-6ADC-4346-B0B5-300A6AEEF84F.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CC2E07C8-6E92-4843-A977-2F26C455C04F_C8591675-3C05-45BF-ABBE-8737F0C9836A.jpg',
              description: `<p>אתמול התעוררתי, אכלתי ארוחת בוקר אמריקאית במלון המצוין האחרון ששהיתי בו בטוקיו, ארזתי את הדברים שלי, ופגשתי את חבר הנסיעות שלי כדי לקחת רכבת ביחד להאקונה (אבל מבטאים את זה HA-KO-NE, ולא ״האקונה מטטה״ כמו שאני בטוח שחלקכם חשבתם בראש).</p><p>הגענו בשעות אחה״צ לאכסניה החדשה שלנו אחרי שאכלנו בדרך אוכל רחוב מצוין בדרך מהרכבת לאכסניה, ופגשנו בחדר שלנו חבורת צעירים שגם הגיעו באותן שעות כמונו לפרק זמן דומה לשלנו (שני לילות בהאקונה). לקח לנו בערך 12, אולי 13 שניות להחליט שיוצאים ביחד לשתות בירה. קנינו בירה בחנות כלבו, טיילנו קצת ברחוב, דיברנו, הכרנו, ובאיזשהו שלב התיישבנו במסעדת קארי מצוינת שחיכינו לה כשעה בתור. בינתיים הצגנו את עצמנו - היינו שני ישראלים, שני גרמנים, פולני, בלגי, והולנדי. סה״כ 7 חבר׳ה בגילאים 25-28 שגילו שהם ישנים ביחד והפכו לחברים הכי טובים ליומיים. בערב, לאחר בירה, סעודה, וטיול ארוך חזרה למלון, נכנסנו לאונסן של המלון. מדובר בבריכה חמה באוויר הפתוח, קונספט שאני מאוד מחבב, ונראה שגם רוב האחרים היו כך.</p><p>היום בבוקר התעוררנו, התארגנו, ויצאנו לטיול במסלול יערי המקיף את האגם הענק שלהם (״ענק״ במימדים של ישראלים) ומשקיף להר המקומי. סיימנו בנקודה נחמדה למרגלות האגם, ומשם רוב התמונות שצילמתי. בערב, הלכנו ל… ובכן, הערב היה מיוחד ולדעתי עליו אספר כבר בנפרד 🤭</p>`,
              id: 11
            },
            {
              date: 'November 7, 2024',
              degrees: '17°',
              name: 'Hakone #2',
              shortName: 'Hakone',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/EB88C6C4-6DC3-4A5D-AC28-F533D19D3CC2_1F89294F-A4D0-4456-914F-5D8B804EA602.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/EB88C6C4-6DC3-4A5D-AC28-F533D19D3CC2_1F89294F-A4D0-4456-914F-5D8B804EA602.jpg',
              description: `<p>את הערב האחרון בהאקונה הקדשנו לטיול לאונסן האזורי (המעיינות החמים). הוא בין האונסנים הבודדים שמתירים כניסה לאנשים עם קעקועים, והבחור הפולני בחבורה היה מקועקע ובדיוק חגג מומולדת באותו יום, אז החלטנו שאין יותר מתאים מסיום היום הנפלא הזה באונסן ציבורי שמותר לו להיכנס אליו.</p><p>האונסן היה חמים ונעים כרגיל, אבל הדבר המיוחד באמת קרה דווקא ביציאה ממנו - משחק רברסי. למי שלא מכיר, זה משחק לוח פשוט (שמסתבר שדי נפוץ ביפן), רמת קושי דומה לשל דמקה. ואיך קשור המשחק הזה לאונסן? כי ביציאה מהמעיינות ראיתי שלושה צעירים יפנים כבני 20+ משחקים והחלטתי לצפות בהם. הם ראו שאני נהנה מהמשחק ונהנו מנוכחותי בהתאם, אז החלטתי להיפרד מהחברים שחזרו למלון ולהישאר עם הצעירים היפנים.</p><p>בפרק זמן של פחות משעה הספקנו להכיר, לדבר באנגלית / יפנית שבורה, להתחרות בשכיבות סמיכה, להחליף טלפונים ולקבוע להיפגש בעיר שלהם (שאינה רחוקה מטוקיו) בעוד כשבועיים, כלומר אחרי שאסיים לטייל בקיוטו והאזור (שרחוקה מעט מטוקיו).</p><p>בתמונה רואים את החברים החדשים שפגשתי לאחר שהתנדבו להסיע אותי ברכב שלהם למלון שלי חזרה מהאונסן ששהינו בו.</p>`,
              id: 12
            },
            {
              date: 'November 8, 2024',
              degrees: '17°',
              name: 'Kyoto',
              shortName: 'Kyoto',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2EC40128-B3BA-4137-8BD0-6C1968E14545_770CE62C-70FF-498F-9D3E-3265726F85A0.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2EC40128-B3BA-4137-8BD0-6C1968E14545_770CE62C-70FF-498F-9D3E-3265726F85A0.jpg',
              description: `<p>להתראות האקונה, שלום קיוטו!</p><p>לאחר נסיעה קצרה בשינקנסן, הרכבת המהירה המפורסמת של יפן (טוב… אחת מהן), הגענו ליעד החדש שלנו - קיוטו, עיר הבירה הישנה של יפן.</p><p>בעצם, פאדיחה קטנה שלי - היינו אמורים לישון הלילה אצל המשפחה המארחת שמצאתי ב-airbnb, אלא שפספסתי לילה אחד ויצרתי חור של לילה אחד שמילאנו מהרגע להרגע באזור פרברי בקיוטו, מרוחק ממרכז העיר אך קרוב לכמה מהמקדשים של העיר (ויש הרבה מהם). מה רבו פלאי הטכנולוגיה, וכמה קל לתקן פאדיחות שכאלו בקלות, במהירות ובזול.</p><p>היינו פעם ראשונה בסופר מרקט שלהם (סופר אמיתי ולא חנות כלבו), ולהסתובב שם היה כמו להסתובב בתור ילד קטן בין מדפי הסופר עם אבא ואמא ולרצות הכל מהמדף של החטיפים - אלא שהפעם יכולנו להרשות לעצמנו מכיוון שהכל שם כל כך הרבה יותר זול מבארץ, והאוכל שם הוא הרבה יותר מאשר רק חטיפים. קנינו דברים טעימים, סאקה (משקה אלכוהולי יפני) לכבוד קבלת שבת, וחזרנו למלון מבסוטים מהמציאה.</p><p>בתמונה: הדמות המצוירת בובספוג, או כמו שכתוב ביפנית: סופונג׳יבובו.</p>`,
              id: 13
            },
            {
              date: 'November 9, 2024',
              degrees: '21°',
              name: 'Ibaraki',
              shortName: 'Ibaraki',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/FBD2CDF5-CA4F-4130-AADD-E071E2B7EA9F_BED1191C-CD9E-4DC1-9513-5BA9B5A447F8.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2989F3DA-E617-4E39-8337-743FEE43C479_EC4A99C4-EC07-4FF8-A713-1DBAFADBC6A1.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/FBD2CDF5-CA4F-4130-AADD-E071E2B7EA9F_BED1191C-CD9E-4DC1-9513-5BA9B5A447F8.jpg',
              description: `<p>כמו שאמרתי בצעד הקודם, המלון ששהינו בו היה בפרברי קיוטו, קרוב למקדשים… אז כמובן שהיינו חייבים לבקר באחד או שניים מהם לפני שיוצאים למשפחה המארחת.</p><p>המקדשים היו חביבים, מאוד מתוירים. צילמתי שם שתי תמונות חביבות. לאחר הליכה חביבה אכלנו אוכל חביב, ואז עוד קצת הליכה, עוד קצת אוכל, עוד קצת אוכל, עוד קצת אוכ- וואו, האוכל שלהם ממש טעים מסתבר.</p><p>הלכנו בערך חצי יום בטוקיו עד שהחלטנו שהגיע הזמן לצאת למשפחה המארחת שנמצאת באיבאראקי - אזור פרברי שנמצא ממש בין קיוטו לאוסקה, וניתן להגיע ממנו בקלות לשני היעדים האלו ולעוד שני יעדים שחשקה נפשנו בהם ונטייל בהם בימים הקרובים - הערים נארה וקובה (כן, כמו המאכל. בערך.).</p><p>עוד לא הספקנו לצלצל בפעמון וכבר הבת הצעירה של המארחת שלנו פתחה את הדלת מכיוון ששמעה את גלגלי המזוודה שלי ברחוב והבינה שאנחנו מגיעים. כבר מיד היה נראה שיצאה לי בחירה מוצלחת עם המשפחה - הבעל והאישה מאוד מסבירי פנים, הבת (בת 8) מדברת אנגלית ברמה שתלמידי תיכון לא מגיעים אליה; הבית מאובזר בפסנתר, גיטרה ותופים חשמליים; האווירה מאוד טובה וידידותית, ואני מרגיש שהולך להיווצר בינינו קשר טוב בחמשת הלילות הקרובים בהם אשהה עם המשפחה.</p><p>את הערב העברנו במסעדה מקומית בעלת תפריטים ביפנית בלבד, ואיזה כיף שחבר הטיולים שלי (שמו אגב גם יוני) ספונטני כמוני ואנחנו יכולים להחליט ברגע אחד שלא בא לנו לפתוח גוגל ולתרגם את התפריט, אלא להזמין מנות אקראיות ולחלוק ביחד. חלקנו 6 מנות. אין לי מושג מה אכלתי, אך יצאנו שבעים ומרוצים לחלוטין :)</p><p>עכשיו כדאי שאלך לישון, כי כבר 3 לפנות בוקר ותכננו למחר יום כיף ארוך באוסקה. לילה טוב 😴💤</p>`,
              id: 14
            },
            {
              date: 'November 10, 2024',
              degrees: '23°',
              name: 'Osaka-shi',
              shortName: 'Osaka-shi',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/70C5533B-38DC-4B8E-946C-A48E6B0ADF23_146AEE58-A5AB-4F35-A183-7FAC15CF42FB.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C4AB8549-7D3E-4D0A-AF0E-2F82FFFBEF02_92B6B53F-40FB-4FF3-B7D5-6775C25F006E.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0D00F776-FA7E-4ED9-A630-2C0669CBCA03_3AF68292-AA40-487E-B9C1-4EE2C4D921E6.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/51E2F932-CAA8-4F9B-B52E-8D8997AA505C_993E2584-7062-4C3B-8DD5-C7962CE8F8F9.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CB835BCA-F462-4497-95CD-45F6D9AA2828_EFEF653E-CF40-4A7F-B242-3638229D19B4.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7DF64C7C-1FBD-4E51-8DD4-80F7E9F3FE4B_A3672FFE-CD25-4D1E-ABFF-B2144514CA0C.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C4AB8549-7D3E-4D0A-AF0E-2F82FFFBEF02_92B6B53F-40FB-4FF3-B7D5-6775C25F006E.jpg',
              description: `<p>היום יוני ואני עשינו יום כיף באוסקה, שהיא אחת משלוש הערים הגדולות ביפן (למרבה הפלא קיוטו אינה בין שלושת הראשונים, אולם יש בכך היגיון, שכן לו קיוטו הייתה בין שלושת הראשונים, אזי אחת מהערים שבין שלושת הראשונים לא הייתה יכולה להיות בין שלושת הראשונים, וזה כמובן כבר מצב מגוחך לחלוטין).</p><p>בשתי התמונות הראשונות: אוסקה.</p><p>בתמונה השלישית: יוני מצלם להקה של… צלמים.</p><p>בתמונה הרביעית והחמישית: הטירה של אוסקה.</p><p>בתמונה האחרונה: ינשוף. כנראה איבד את דרכו להוגוורטס.</p><p>בתחילת היום תכננו לסיים את הערב באזור הבילויים הליליים של אוסקה, אך בסביבות אחה״צ החלטנו לסטות מהתכנון (אנחנו עושים זאת הרבה; יש שיאמרו אפילו שאנחנו שני סוטים) ולסיים את הערב באיבאראקי, העיר הפרברית שבה אנו לנים. מצאנו מסעדה מקומית עם צוות שאינו דובר אנגלית ותפריטים ביפנית בלבד. אני כבר מזמן החלטתי שזה סוג המסעדות האהוב עליי פה, ואני חושב שיוני מסכים איתי. הייתה ארוחת ערב טעימה עם צוות מסביר פנים שחתמו נהדר את היום הראשון שלנו באוסקה :)</p>`,
              id: 15
            },
            {
              date: 'November 11, 2024',
              degrees: '23°',
              name: 'Ibaraki',
              shortName: 'Ibaraki',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7526D327-DE5E-42B9-956B-6DF587996729_F0EEDCEB-43DD-465E-B102-3B69FF453018.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3407BE02-FFBA-4C3A-AF38-218C3E557E22_E842A14E-D9DE-4373-9014-B198E10B5B3E.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/35B59B1C-3DA4-4A2E-876A-87C31BD7A5AD_C298DFBE-DA76-46B5-B5A1-9A56B3F131BE.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9BDC62D3-C0BA-4251-9FEB-6727A2871F7D_6257BDAE-84B8-410F-B4AE-4E04359AEA35.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3407BE02-FFBA-4C3A-AF38-218C3E557E22_E842A14E-D9DE-4373-9014-B198E10B5B3E.jpg',
              description: `<p>פתחנו את הבוקר עם שיעור קליגרפיה ומיד אחריו טקס הכנת תה מאצ׳ה עם קימונו (לשם ההבהרה: אנחנו היינו עם הקימונו. התה לא לבש קימונו). קימונו הוא כמובן הבגד המסורתי של יפן, שניתן לראותנו לובשימו בתמונות האחרונות.</p><p>השיעור היה נחמד מאוד; את האותיות כבר הכרתי, אבל אקיקו, בעלת הבית שאנחנו לנים בו (שהיא גם זו שהעבירה לנו את השיעור ואת הטקס) ממש לימדה איך נכון להחזיק את המכחול ובאילו זוויות כדי לצייר את האותיות באופן מדויק. אני מניח שזה משהו שרלוונטי לכל שפה, לרבות עברית (לפחות עבור סופרי סת״ם), אך מעולם לא יצא לי להתנסות בכזה דבר, ובתור חובב שפות אהבתי לחוות טעימה מהאמנות הזו.</p><p>בנוגע להמשך היום - שכבתי במיטה. בעצם קמתי די חַלוּשֶׁס כמו שאבא שלי אומר… אולי זה מהאוכל שאני לא רגיל אליו, ואולי מסיבות אחרות. אכלתי אתמול ביצה חיה במנה שהזמנתי במסעדה, אז אני יכול להאמין שזה האוכל. קורה.</p><p>בתמונות הראשונות: יוני ואני כותבים את השמות שלנו ביפנית.</p>`,
              id: 16
            },
            {
              date: 'November 12, 2024',
              degrees: '22°',
              name: 'Universal Studios 👾🎯⛳️',
              shortName: 'Universal Studios',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/02E2929B-5504-4810-960C-B0CE3CB76344_44630B30-CC6D-43D5-B491-CA79D1CC8BA6.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/F6B66FBC-9D1C-48BB-AB1E-41D29CDFFFF0_BD4C4D2D-6A6E-4946-A78E-065E28EC9718.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/E1A9A4CA-43CB-4AAC-B2F0-DD0F5A6630C0_CCAFE5F0-AB4C-4661-AC76-EE83D0FC1571.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/608C1696-7F23-43B0-8BCF-5E9A0A519FA9_AE4759E7-3F44-4232-AF15-E847039A32CD.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/5077c70a-a977-4c30-bd79-b2398526abd7_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/ADF104FA-86D5-4124-AE3F-15D2C2301155_EB942D7D-5737-470E-94B8-BE0186039CE9.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/DFDB8285-FBB9-4A31-A9BB-E1F1C088BC9D_233B2E03-2FC6-4498-A357-AB4DF5A408EE.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5756FB1B-B655-4A62-8F12-41ED739EB4D4_F578144F-6A03-4D50-84D9-6AD5A5A979A0.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/a4675545-7837-48ff-9ec6-cb3a47e815be_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/74E177C8-00BE-4E8A-BF8D-98ACE4397ABD_CFB877C3-F590-405B-AD7C-D67326878822.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/4809d549-799b-43c2-95cb-3d5d4a1f8095_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4BAF3B9A-6ABF-4F5A-A5EE-F2D4286DFF0E_1477228B-889A-4BC2-903A-CABE8C5D680F.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2AA383B8-9949-4853-99D6-94CD45125EFE_244163F0-E425-4561-93D2-5FD2C35EC7CB.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C08A0207-21A9-4850-9EF2-5BFEB7EC05FC_14A4EE30-65CC-424D-88D3-872092AB2B6B.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2D17E1C6-FC69-4B9E-BCE0-4FA37385C883_8D518FC2-A847-4B1E-B86C-AD9056FB57B0.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/A2473AE2-9511-41B6-9FFF-221D9C702B0B_0B95A9B1-2121-4252-A513-9B11695A53A4.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B63EB948-E902-4722-AECF-3931DD5820FD_1AE0C6EA-BF27-4CC0-BDB3-052AC0F94A9C.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8D8E0D9C-03A2-45A6-9976-4E1142C422F2_82FBA563-C530-4DFD-AB6C-04F08855B703.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4BAF3B9A-6ABF-4F5A-A5EE-F2D4286DFF0E_1477228B-889A-4BC2-903A-CABE8C5D680F.jpg',
              description: `<p>זוכרים את הרגע בסרט הראשון של הארי פוטר שבו הארי נכנס לראשונה לסמטת דיאגון? המוזיקה. האורות. האנשים. התפאורה שזזה כאילו הייתה חיה בעצמה. ככה זה הרגיש להיכנס למתחם של אולפני יוניברסל ביפן. רמקולים בכל פינה שמשדרים בעוצמת קול מושלמת מוזיקה שגורמת לנו להרגיש כאילו אנחנו בתוך סצנה מסרט, ריחות, צבעים, ואנשים בכל הגילאים שמגיעים לראות ולחוות עולם קצת שונה וצבעוני יותר מהעולם שאנחנו חיים בו ביומיום, כל אלו היוו את החוויה של היום הזה (שארך 12 שעות, וגם זה מבלי לעלות על כל המתקנים).</p><p>האטרקציות כוללות מתקני שעשועים, צוותי בידור, מסעדות בנושאים השונים של הפארק, ועוד. לא אכביר יותר מדי במילים, תוכלו לראות ולשמוע בעצמכם בתמונות ובסרטונים. מבין הסרטים / משחקים שנכנסנו לעולמם לכמה דקות ניתן למנות את הארי פוטר, מלתעות, סופר מריו, פארק היורה והלו קיטי.</p><p>10/10.</p>`,
              id: 17
            },
            {
              date: 'November 12, 2024',
              degrees: '21°',
              name: 'Jamming 🎸🎤🎶',
              shortName: 'Jamming',
              media: [
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C2247D88-195B-43F6-9449-FCB7C9B2B355_37D1E518-B290-4C50-BDB7-6D27F62C07A1.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/5f882135-1b7c-4c70-b438-738f2381cae2_video'
                }
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C2247D88-195B-43F6-9449-FCB7C9B2B355_37D1E518-B290-4C50-BDB7-6D27F62C07A1.jpg',
              description: `<p>לאחר שהיינו באולפני יוניברסל מהפתיחה ב-09:00 ועד הסגירה ב-21:00, רצתי כדי להספיק להגיע למשהו שמצאתי מראש באינטרנט: בר ג׳אמים בקיוטו.</p><p>אני אוהב לנגן, כל עוקביי כאן יודעים זאת; ואני אוהב במיוחד לנגן עם אנשים אחרים, בין היתר בתוך מסגרת שנקראת ״ג׳אם״ - אנשים שונים שלא מכירים אחד את השני עולים על במה אחת ומאלתרים ביחד מוזיקה. בחיפה זה נפוץ מאוד. ביפן… נראה שקצת פחות. אז עד שמצאתי באינטרנט בר אחד בקיוטו שמקיים ג׳אמים פעמיים בחודש, ידעתי שאני חייב להגיע אליו, עד כדי שכירת קפסולת לינה ללילה אחד בקיוטו (על אף שהייתי אמור לישון אצל המארחת אקיקו [וכמובן עדכנתיה מראש על היעדרותי]).</p><p>הספקתי להגיע כחצי שעה לפני שהג׳אם נגמר, ואפילו ניגנתי ברוב הזמן הזה. הבר היה קטן מאוד, הכיל כ-15 איש בתפוסה מלאה, ורוב השוהים במקום היו מבוגרים (לדעתי 50+) וניגנו בלוז בסגנון שנות החמישים. כשאני עליתי על הבמה כמובן שהייתי חייב להביא מהאנרגיות שלי לג׳אם, דבר שאני חושב שמעט הפתיע את השוהים, אך עשיתי זאת באופן שלא יפגע בסגנון הבלוזי של הג׳אם, וכולם מאוד נהנו מהמוזיקה שיצאה מכך, במיוחד הנגנים שניגנו איתי.</p><p>נשארתי בבר עד שהוא נסגר ב-3 בלילה, דיברתי עם הברמן החביב שלימד אותי קצת יפנית ועם צעיר ירדני אחד שנתן לי המלצות מה לעשות (או לא לעשות) בלוס אנג׳לס כשאגיע לשם בטיול שלי.</p><p>בסרטון ניתן לראות את הג׳אם שהיה כשהגעתי. אין סרטונים שלי כי לא חשבתי על לבקש ממישהו שיצלם אותי באותו רגע, כל מה שהיה לי בראש זה לנגן עם אנשים :)</p>`,
              id: 18
            },
            {
              date: 'November 13, 2024',
              degrees: '21°',
              name: 'My Heart',
              shortName: 'My Heart',
              media: [],
              description: `<p>עתה אני רוצה לשתף משהו מהלב שלי.</p><p>הרבה אנשים שואלים אותי איך בטיול, וכמעט תמיד השאלה המתלווה היא ״ואיך אתה מרגיש בנוגע לזה?״. אני חושב שכל עוקביי באפליקציה הזו יודעים על מצבי הנפשי, או במילים יותר ישירות - יודעים שאני בדיכאון; לכן, ארשה לעצמי לענות על השאלה הזו באופן ישיר.</p><p>התשובה היא - די חרא.</p><p>אני מרגיש כאילו אני חי את החלום… אבל זה לא החלום שלי. זה החלום של מישהו אחר, ואני במקרה נמצא כאן במקומו. כאילו אני לא שייך. אז לפעמים עולות לי מחשבות של ״מה לעזאזל אני עושה? למה אני כאן בכלל?״.</p><p>אבל… רוב הזמן זה לא ככה. רוב הזמן זה אחרת. רוב הזמן, לרבות עת כתיבת שורות אלו, אני מרגיש כמו… כמו אשתו של השוטר אזולאי בסצנה ההיא כשהוא כועס עליה שהכל טוב לה. רוב הזמן הכל טוב לי. הלכתי ליוניברסל? מגניב. לא הייתי הולך? גם מגניב. הלכתי למסעדה והיה טעים? מגניב. הלכתי ולא היה טעים? מגניב, לפחות ניסיתי משהו חדש. הספקתי לרכבת? אחלה. לא הספקתי לרכבת? גם אחלה, יש אחת עוד 5 דקות אז יש לי זמן לנוח רגע. אני אף פעם לא חסר מעש, ואף פעם לא מרגיש כאילו אני מפסיד משהו, כי תמיד יש מה לעשות כאן. אם אטרקציה אחת סגורה, יש עוד 10 שפתוחות. הג׳אם הזה שעשיתי? יש בדיוק כאלו ג׳אמים בחיפה. בניגוד לכך, אני יודע שביפן יש סגנונות מוזיקה פופולריים שאין בארץ (כל מיני תת-ז׳אנרים של מטאל למיניהם), והייתי רוצה ללכת לג׳אם שכזה… אבל זה לא מפריע לי שאני לא מוצא כאלו. אני אמשיך לעצור אנשים ברחוב שיש להם גיטרה על הגב ולשאול אותם ״אתה מנגן איפשהו? אני גם מנגן, אפשר להצטרף?״ כי אני חושב שזו דרך נהדרת ליצור קשרים עם אנשים ולגלות דברים שאני לא יודע שאני לא יודע על קיומם. אז סבבה לי.</p><p>חשוב לי להדגיש שאני לא מסתיר שום דבר ולא מכחיש שום דבר. אני כמובן מדבר על דברים שביני לבין עצמי. זה לא שאני מתבאס מזה שפספסתי רכבת ולכן אני מנחם את עצמי ב-״טוב נו, יש אחת עוד 5 דקות״… אני פשוט באמת לא מתבאס מזה. זה באמת סבבה לי. אני חי את החיים בקצב שלי, ואני חושב שזה קצב טוב, ולפספס רכבות או לאכול מנות לא מוצלחות במסעדה זה חלק מהתהליך של… לחיות.</p><p>דבר נוסף שהייתי רוצה לשתף - כל הפסקאות הנ״ל לא מתארות משהו מיוחד שקורה דווקא עכשיו ביפן. זו פשוט צורת החיים שלי כבר כשליש מחיי, ולמען האמת זה לא כזה נורא. זה לא מושלם כמובן, אבל אני חושב שלכל אחד יש את החרא שלו, וזה שאני מכיר את החרא שלי ואת הדרכים שלי להתמודד איתו זה כבר דבר טוב; בהמשך אולי אלמד להתמודד איתו בצורה יותר טובה… אבל זה חלק ממני בכל מקרה. זה אני. בתור ילד הייתה לי בטן רגישה והיו לי המון כאבי בטן, אז לא מפתיע אותי שכשאני אוכל משהו שאני לא מכיר אני קצת חולה למחרת. קורה. בתור ילד הייתי רגיש ובוכה המון, אז לא מפתיע אותי שזה קורה עכשיו גם בטיול. זה אני, וזה חלק ממי שאני, וגם אם זה לא הכי אידאלי… זה באמת לא כזה נורא. אני אמשיך לחיות, ואמשיך לאכול דברים חדשים, ולהכיר אנשים חדשים, ולנגן עם אנשים חדשים, ולחטוף בחילות מדי פעם, ולבכות מדי פעם, ואני שלם עם כל הדברים האלו. זה מי שאני :)</p><p>דבר אחרון - תודה ❤️</p><p>גם אם אני לא באמת נהנה ממוזיקה בחיי, אני עדיין יודע להעריך מוזיקה טובה כשאני שומע אחת כזו.</p><p>גם אם אני לא באמת נהנה מאוכל בחיי, אני עדיין יודע להעריך מנה טובה כשאני טועם אחת כזו.</p><p>גם אם אני לא באמת נהנה מחיי, אני עדיין יודע להעריך את החיים שלי ולדעת שיש לי חיים די מדהימים. ובאופן יותר ספציפי - לדעת שאני מוקף באנשים מדהימים שאוהבים אותי, שאכפת להם ממני, שרוצים בטובתי. אני לא יודע לחלוטין איך להביע את ההערכה הזו, אז לפחות חשוב לי לעשות את המינימום - שזה להוקיר לכם תודה.</p><p>תודה שאתם פה בשבילי ❤️</p>`,
              id: 19
            },
            {
              date: 'November 13, 2024',
              degrees: '21°',
              name: 'Kyoto #2',
              shortName: 'Kyoto',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B8115031-E740-45BB-B48D-7EFEECB005DD_59FD7044-48E5-4EE7-97A5-EF246A53D8DF.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B8A2DFD1-0DAE-4B9C-9EF0-BD5ECFFF17C4_87FF50EF-A897-406B-975A-94086ABC8E72.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/d970a7ae-c862-48f5-84c4-d0e45e50d875_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9EB69D8C-5163-49C7-9416-A623ADF0C85E_69AF388E-E420-40FF-8972-EAAC616818FF.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C2E523F5-86E3-4502-BBD8-EEF49D9AC9C5_1CDD1DFE-F935-4FD4-A4BE-B8A4961DA39E.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/DF6C3581-502E-4467-BDFA-781B04A5F14B_A832E1B1-C316-4D96-A5D0-1F01A7FBE8D7.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/DF6C3581-502E-4467-BDFA-781B04A5F14B_A832E1B1-C316-4D96-A5D0-1F01A7FBE8D7.jpg',
              description: `<p>לאחר הג׳אם של אתמול, התעוררתי בקיוטו באזור שהיה נראה די מרכזי… אז הזמנתי את יוני והסתובבנו ביחד. אכלנו ראמן שכנראה היה הראמן הטוב ביותר שאכלתי בחיי, עם שף שהכין לנו את הבשר עם להביור מול העיניים.</p><p>לאחר מכן הלכנו ל-Owl Cafe. קפה לא היה במקום הזה, אבל ינשופים היו בשפע, והיה ניתן ללטף את חלקם. לא יודע אם וכמה הם נהנו מזה שמלטפים אותם בעודם אזוקים ברגליים לענפים שעליהם הם עומדים… אבל היה מעניין לראות אותם.</p><p>לאחר מכן טיילנו עוד קצת, ראינו מעט טבע, ראינו שוק ענק שאני חד-משמעית אעביר בו יום שלם מחיי מתישהו בשבוע הבא כי הוא לחלוטין שווה את זה. בשוק מצאתי חנות מוזיקה בעלת 6 קומות, ומשם שלחתי ליוני את התמונה השלישית מהסוף עם הכיתוב ״זה מה שקורה כשאתה משאיר את סחבק 5 דקות לבד… הוא הולך לבדוק פיות של טרומבונים״. פייר, היו שם כל כך הרבה פיות שהייתי חייב לבדוק את ההבדלים ביניהן.</p><p>בערב עשינו סיור ברובע מסוים של טוקיו עם מדריך לא מוצלח במיוחד, אז לא למדנו ממנו יותר מדי… אבל הנוף והאווירה היו כמו לקוחים מסרט. או ממשחק מחשב. תלוי את מי שואלים.</p>`,
              id: 20
            },
            {
              date: 'November 14, 2024',
              degrees: '21°',
              name: 'Kyoto #2.5',
              shortName: 'Kyoto',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D15FFF41-4054-4063-95D5-1DC41431218C_B4C5E07E-F0C9-475D-AE12-DF20A8C0AF92.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/6497932D-51D2-4892-812F-5C84F2262C01_A3FBFBE9-1A6E-4ADE-B2A8-910AD4C0680F.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/6497932D-51D2-4892-812F-5C84F2262C01_A3FBFBE9-1A6E-4ADE-B2A8-910AD4C0680F.jpg',
              description: `<p>היום היה בעיקר יום מנוחה. נפרדתי בבוקר מאקיקו, אך לא הספקתי להיפרד כמו שצריך מכיוון שהבת הייתה בבית הספר, האבא בעבודה, ואקיקו העבירה שיעור. אעבור אצלם בהמשך השבוע ואגיד תודה כמו שצריך על האירוח, וכנראה שגם אקנה מתנה ואכתוב ברכה ביפנית שבורה כמו שאני אוהב לעשות.</p><p>הצטרפתי ליוני בקיוטו, שכן זה עומד להיות הלילה האחרון שלנו ביחד; מחר הוא יוצא לעשות טיולים ולהתחיל להתקדם צפונה, ואני נשאר באזור של קיוטו-אוסקה להכיר קצת יותר טוב את האזור ולטייל גם בערים מסביב. אתמול בערב הבעתי בפני המארחים שלי את הרצון לשכור רכב ולהרגיש קצת איך זה לנהוג על צד שמאל של הכביש, והם המליצו לי על שתי עיירות לא רחוקות מדי שקשה להגיע אליהן בתחבורה ציבורית, אך קל יותר להגיע ברכב, והם סבורים שיהיה לי מעניין שם. רשמתי בפניי, וכנראה שבאמת אבקר.</p><p>בערב טיילנו קצת בעיר, וחלפנו על פני תופעה שהייתי חייב להיכנס כדי להתפעל מיופיה: חדר גדול (בגודל של חנות בינונית) במתחם קניות, ובו אנשים יושבים ומשחקים בקלפי משחק יפניים למיניהם (יוגיהו, פוקימון ודומיהם). היו שם גם אוספים מאוד מרשימים של קלפי משחק שניתן לקנות, אבל מאוד עניין אותי לראות את החבר׳ה שפשוט יושבים ומשחקים. אולי אעבור שם שוב בהמשך ואנסה להצטרף אליהם.</p><p>בתמונה הראשונה: פנקייק יפני.</p><p>בתמונה השנייה: פנקייק לא יפני.</p>`,
              id: 21
            },
            {
              date: 'November 15, 2024',
              degrees: '21°',
              name: 'Osaka #2',
              shortName: 'Osaka',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/6FE83919-7D61-460E-BBD9-065B54652D18_C9A50D60-ED9D-4EF8-A967-9C21DEA4B0B1.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/70928444-50DA-427E-BE15-8EBBBD7048B6_4194D6DA-DD4A-45D4-B17E-D6DDC05FB920.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B5ADF93C-978A-4CAC-88D1-9C0F856E8D0E_529B46AE-9C2E-4BE9-8477-C0F74177E1A5.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0ECFACD6-2966-4CCB-90C2-F3BA9CC18410_A9E4BB27-475C-4E77-9C07-8B127BA08647.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/EECB6299-090A-4BC8-BAC9-2CA49EA1623D_C87AB569-1F0B-452E-8797-10DD936C2237.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9B112BAA-5C2C-4257-A25A-53E3D032D336_296B6FDD-A2A2-48CE-A166-1D85E45147C9.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/02A62677-D48D-447C-851B-BE2B3A224C79_5B660D9E-8897-4A69-AB35-ABD1480D817B.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0ECFACD6-2966-4CCB-90C2-F3BA9CC18410_A9E4BB27-475C-4E77-9C07-8B127BA08647.jpg',
              description: `<p>למרות שרק אמצע נובמבר, נראה שיפן כבר מתחילה להתקשט באווירת כריסמס: עצי חג מולד ממלאים את הקניונים, מתנות באווירת חג מולד מועמדות למכירה, ונרות חנוכה מודלקים ע״י עוברי אורח כאוות נפשם (תמונה שלישית).</p><p>חזרתי שוב לאוסקה ליום אחד כי רציתי לחוות את חיי הלילה ברובע אחד ספציפי שלא הספקתי לבקר בו בפעם הקודמת. הלכתי לבר חביב שנכנסים בו בקושי 5 אנשים. האווירה הייתה נחמדה מאוד, בעל המקום ידע לדבר אנגלית די שוטפת, אך ניסיתי לנהל איתו שיח ביפנית ככל יכולתי, והוא שמח ללמד אותי פה ושם. הוא היה אחד האנשים היותר נחמדים שהכרתי עד כה בטיול. למען האמת, אם להיות כן ככל האפשר… הוא ממש ממש הזכיר לי את סבא יוחאי שלי זכרונו לברכה 😆 קטע מעניין, פתאום גרם לי לחשוב אם סבא היה מסתדר ביפן (אם כמובן מניחים לרגע את מחסום השפה בצד). נראה לי שהוא היה נהנה.</p><p>בתמונה הרביעית: סגנון בנייה שקצת הזכיר לי את אמסטרדם, עם החנויות והמסעדות שעומדות על גדת הנהר החוצה את העיר. אכלתי במסעדה שבה אני צולה את הבשר בעצמי למידת העשייה הרצויה עליי, הפעם על גחלים לוחשות. כבר צילמתי אחד כזה בטוקיו, ועדיין… קונספט נהדר של היפנים, ואפילו די זול (40₪ מנה).</p><p>חסרון אחד שהופתעתי לראות באוסקה ולא ציפיתי להיתקל בו בכזו בוטות ביפן - הזנות די חוגגת שם. זאת אומרת, כן, ברור שבערים גדולות תמיד יהיה ניתן למצוא זאת, ועדיין… הרבה מועדונים נראים מפוקפקים למדי, ובחצי השעה שהסתובבתי בה בין חנויות הספיקו 4 ציידות להציע לי ״מסאזי״ עם בנות יפהפיות יפהפיות שאקבל מהן ״happy ending״. אני תוהה מה זה אומר. אולי היא מקריאה לי סיפור אחרי המסאזי ונותנת נשיקת לילה טוב. אנא אערף. בכל אופן זה לא סקרן אותי מספיק כדי לבדוק במה מדובר - אני אעדיף להוציא 400₪ על סטייק מאשר על מועדון מפוקפק (ספוילר למחר 🤭).</p><p>בתמונה השישית: חולצה באיכות שאין למצוא באלי-אקספרס… אך עם מחיר שגם אותו אין למצוא שם (240₪ לחולצה 🥲).</p>`,
              id: 22
            },
            {
              date: 'November 16, 2024',
              degrees: '19°',
              name: 'Kobe 🥩',
              shortName: 'Kobe',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/25494134-F608-4DB8-99F9-4BED8B51BC9F_76228550-1867-46F0-8EEF-038AB760A2A9.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/91B679F9-2069-443A-A320-38AC3462F2C7_5EEA4CB6-F87C-47BD-81CC-50E80C778D24.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D96E6123-65D4-4295-BDF0-F16DBDFB8E00_E8A433E1-71AA-4C0A-8AE1-AA3FD87946B5.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/dd7ebbfa-bc21-42a7-b165-b01e9ef4b386_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9EBA0190-6E73-4013-ADAE-EFD12186F45D_74C12A2C-86A9-4986-A59B-B92D224691A9.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/28d4b7a9-cb06-4284-a85f-04b9f76e57a0_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3D0EDB07-670C-40C9-9B60-C7D3B0F15392_62D0D7A6-0DD8-474A-B85A-ED7A8596AEC6.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3665F1B1-611C-4ADE-8E39-7A7754683F98_FC17118D-C49F-4726-B120-4787BF4672FE.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4A3D4F79-C97E-4D62-92C1-15EC4E7AB018_8A0C5684-02DD-42C0-9488-C2968FD01ABD.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C8BDA5E1-889F-4858-BA21-6E61A0A0AFAC_2A23A907-0959-45B6-B7C2-4F1818AE8D91.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/E76C9DEA-EB2A-4CFA-BF10-5346C9D2D060_DBA5E7E5-E796-4E8C-9493-208C6CF6E6BE.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/080bd7d0-2e8d-4dd3-b94c-db97b860de4f_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/55403D45-F165-4170-A6C1-8F39DACA1235_A9957D04-A3BA-4DAB-9B62-78CF14E85540.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/291905f8-7c67-4f84-abd4-13223d5ead12_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/DDD14BCE-C3D5-482D-977F-70568E7DA809_13509950-C369-4E85-900B-9D7CDADD5E87.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C7ECC514-0D97-40CA-8719-DC526089370B_FD890192-9267-4017-A433-49C1A442416C.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/947CD183-5427-4F5F-8659-29FF327E8185_995CEAE2-FDB1-4B34-96C9-525E6818E144.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4A3D4F79-C97E-4D62-92C1-15EC4E7AB018_8A0C5684-02DD-42C0-9488-C2968FD01ABD.jpg',
              description: `<p>היום הגעתי לעיר הנמל קובה, שנאמר לי עליה שיש בה את האוכל הכי טעים בעולם. בעצם בכל הערים ששהיתי בהן ביפן עד כה ראיתי מסעדות שמציעות Kobe Beef בגאווה, אך כמובן ששמרתי את החוויה של המנה הזו לעיר האמיתית שהמנה קרויה על שמה.</p><p>כבר על הבוקר, במסעדה הראשונה שהגעתי אליה, הכרתי מישהי עם תכנון טיול זהה לחלוטין לשלי - אין תכנון. היא קמה בבוקר, פותחת גוגל מפס, בודקת מה יש לעשות והולכת לשם. אז הצעתי לה שנסתובב ביחד, וככה העברנו את יום הכיף שלנו בקובה ^^</p><p>בתמונה הראשונה: סטייק 110 גרם ב-400₪. בראש שמעתי את הקול של אבא שלי אומר ״תאכל לאט יוני, כל ביס זה 50₪״.</p><p>בסרטונים: במקרה יצא לנו להיתקל בפסטיבל בזמן שהסתובבנו בנמל, וברגע שהאוזן שלי שומעת כלי בראס מנגנים באופן חי אני כמובן מתמגנט למאורע - ומגלה שמדובר בתזמורת מצעדים שגם משעשעת את הקהל עם כוריאוגרפיה מגניבה בנוסף למוזיקה האנרגטית באופן מדהים שהם ניגנו.</p><p>תמונה חמישית: שעון הפרחים המפורסם של העיר. למדתי ממנו איך כותבים ״אהבה״ ביפנית.</p><p>בתמונות הבאות: עוד קצת טבע, עוד מוזיקה, ו, אה… מישהו מפורסם? סלב? כוכב פופ? לא כזה ברור, הרחובות פתאום התמלאו ואנשים מחזיקים שלטים ודברים זוהרים וקוראים בשם שלו, ו… רגע רגע רגע. רגע אחד. יש מחר בחירות עירוניות בקובה, זו בכלל תעמולת בחירות!! אין לי מושג איך מגיעים למצב שמתמודד לראשות העיר מקבל מעמד של סלב, אבל היה מעניין לראות את התופעה 😆</p><p>בתמונה הבאה: כל הטיול אנשים מתפלאים מנעלי האצבעות שלי מכיוון שלא ראו כאלו מעולם, ופתאום ברגע אחד… שלושה אנשים עם נעלי אצבעות מוצאים אחד את השני (את השלישי) עומדים בקרון אחד ברכבת. צחוקים.</p><p>בתמונה הבאה: כמו שכתבתי בעבר, לא הספקתי להיפרד מאקיקו כמו שצריך, אז הגעתי אליהם הביתה בהפתעה, מסרתי לאקיקו מכתב תודה ביפנית, ולבת שלה קניתי במתנה ספר מאת סופר הנוער האהוב עליי (ריק ריירדן). אקיקו אמרה שהרבה מתארחים ניסו לכתוב לה בעבר ביפנית, אך מעולם לא קיבלה מכתב שמנוסח בצורה כה נכונה וחסרת שגיאות כתיב. יחי פלאי הטכנולוגיה ><</p><p>בתמונה האחרונה: משחק מילים איכותי.</p>`,
              id: 23
            },
            {
              date: 'November 17, 2024',
              degrees: '22°',
              name: 'Goodbye Kobe',
              shortName: 'Kobe',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0551BBF1-13A7-4BDF-BE6B-48AF9054ECA2_9000BEEB-E463-4E56-B5F9-4A35BF5A6D7D.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0F458203-E2F4-4A1C-8618-4DEEBC4F717B_981E7487-B72F-4185-9A98-E6CE750ADDF9.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/90A5986B-25BD-4777-AF39-E54160AD26E4_D1C6EEB1-6F58-4C5A-A2A3-1B469B15E313.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/A97CD0E4-7B10-4E69-B8FD-F33340ADD454_13C56A8A-B91A-48D9-BEB3-324AFB09523F.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/a54f74a7-2cb9-413a-8f03-8e3720be4e72_video'
                }
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0551BBF1-13A7-4BDF-BE6B-48AF9054ECA2_9000BEEB-E463-4E56-B5F9-4A35BF5A6D7D.jpg',
              description: `<p>החלטתי שלא מיציתי את קובה ורציתי שם עוד יום אחד. הלכתי לישון בפעם הראשונה בטיול (ובחיי בכלל) ב-״מנגה קפה״, או ״קפה אינטרנט״ - מקום שמציע קפה, חוברות מנגה (קומיקס יפני), ועשרות (או מאות?) תאים פרטיים שכל אחד מהם מכיל מחשב עם גישה לאינטרנט, ו… זהו בערך. המקומות האלו נפוצים כאמצעי לינה זולים, ורציתי לחוות את הדבר הזה פעם אחד לפחות. היה די נחמד. המיקום היה מאוד מרכזי, קיבלתי שם את כל הצרכים שלי (לרבות שירותים ומקלחת), והמחיר די זול. מגניב.</p><p>הסתובבי עוד בקובה, הייתי בשוק, מסעדות, בתי קפה, בכל מקום אני אוכל מנה קטנה כדי להשאיר מקום למסעדה הבאה ולחוות כמה שיותר מהעיר. בערב הגעתי (במקרה לגמרי) לבר מעניין שניתן למצוא בו הרבה… מיצים. סליחה, שגיאת כתיב. התכוונתי ציצים.</p><p>בתמונה הראשונה: אם לא יוצא מהברז הזה חלב אני אהיה מאוד מאוכזב.</p><p>בתמונה השנייה: טוב, אמנם חלב לא יצא מהכוס הזו, אבל כן יצא שמן זית. ומהחור שהייתם מצפים שזה יצא ממנו.</p><p>בתמונה השלישית: למרות שלא היה לי צורך באותו רגע, הברמנית (המאוד חביבה, שהמשכתי לדבר איתה מעל שעה אחרי שסיימתי לאכול) התעקשה שאני צריך לבקר בשירותים שלהם. היא לא טעתה.</p><p>בסרטון האחרון: ברז משעשע ביציאה מהשירותים.</p><p>התחנה הבאה: קיוטו.</p>`,
              id: 24
            },
            {
              date: 'November 18, 2024',
              degrees: '16°',
              name: 'Ōtsu',
              shortName: 'Ōtsu',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/00C1D925-994D-410C-ABD1-F563265F4AFD_F81274F5-9ACC-434E-B57C-A620794BA581.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D8953E41-B15A-4817-8F64-B3AE381A0A08_E74245F9-EF6F-4B59-9474-B9ECD4E706AA.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B9D83101-A283-47B4-96FD-C1A5EFE9D048_3AF619EE-7D91-440B-B05E-2AD8635E753E.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/AA281B5B-FB99-42F5-A167-B72E42726AD8_5232E8F8-0594-4018-BC00-35574A071515.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7861591C-AA47-4799-A8ED-FA33577C9D14_B8D860EB-0829-4542-AB7C-E1535BD0C1BD.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/73550012-2384-47D0-AD0F-9510D41FC007_4BCE133A-CDBA-4CD4-AAC3-B529D07BF947.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/a6a8cf29-d086-48b2-98a5-1f88bb3119f3_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7C7EC6D5-28C1-488F-B7E5-A28A5B1A7EED_57E70D3B-D058-4595-AE01-4C6D0B355B78.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/2c2463cd-94d5-4674-ba8c-50e5cd52ea43_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9CA37E80-92F7-494F-950E-C6AACDD9BF4F_EE09A9A7-03FD-4340-BF2A-AFCDB698AAF0.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/c242e493-9012-4673-949d-16e06f40642b_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5BC736AB-E06B-483D-81D9-4067DB348E0E_E2806A64-A3A2-4502-87FF-DD47A8F7D425.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/ed2622cf-edd4-4f28-99bd-96770a8deb29_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7EC9119B-C4B9-49AB-8DF2-3E065D698FA5_D7AF115C-F64D-4FF6-8D39-763F27369322.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/3ca5ff3c-6de2-4113-93b5-e4d94b940663_video'
                }
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/73550012-2384-47D0-AD0F-9510D41FC007_4BCE133A-CDBA-4CD4-AAC3-B529D07BF947.jpg',
              description: `<p>הרגשתי כי טרם מיציתי את קיוטו, אז שכרתי מיטה בבית הארחה לשני לילות בעיירה סמוכה לקיוטו בשם אוֹטסוּ, ויצאתי שוב העירה.</p><p>אחת הפריבילגיות של טיול לא-מתוכן היא היכולת ללכת ברחוב, לקלוט בזווית העין ספק-סטודיו-ספק-חדר-חזרות-מוזיקלי, להיכנס, לשאול אם יש מקום פנוי, לשכור חדר לשעה אחת, לעשות רעש ולצאת. כל התענוג הזה - 20₪ לשעה. בחדרה זה היה עולה מינימום 80₪, שלא לדבר על תל אביב שבה המחירים משולשים ואף מרובעים מהמחירים של חדרה.</p><p>לאחר שביליתי, אכלתי, צילמתי נופים יפים, ראיתי צב-ים-מחמד בכניסה לבית פרטי כלשהו, ותפסתי קרן אור מסקרנת במצלמה (לא אתפלא אם היפנים כבר מתקשרים עם חייזרים), חזרתי לאוטסו וארגנתי את חפציי.</p><p>בדרכי למכבסה השכונתית, בעודי הולך ברחובות החשוכים והריקים של העיירה, קלטו אוזניי צלילים שנשמעים כמו מוזיקה חיה. נמשכתי לכיוון הצליל כמו בסרט מצויר ללא שום יכולת התנגדות או שליטה, ומצאתי את עצמי בבר שכונתי קטן ובו אנשים חייכנים וחברתיים (שמדברים אנגלית לא רעה בכלל!), מוזיקת ג׳אז קל חיה, ובירה ב-7.5₪ לפיינט. ידעתי די מהר שארצה לחזור שוב לבר הזה גם מחר; נראה היה כי המקומיים שם לא רגילים לראות תיירים, והתעניינותם בי הייתה יוצאת דופן (לרבות השאלה החוזרת ונשנית - ״למה דווקא אוטסו?״ כאילו העיירה שלהם לא מספיק מושכת, כשבעצם זה בדיוק סגנון התרבות שחיפשתי לראות ולהכיר).</p><p>בסרטון האחרון: בר שלם של יפנים לומד להגיד ״לחיים״.</p>`,
              id: 25
            },
            {
              date: 'November 19, 2024',
              degrees: '12°',
              name: 'Otsu #2.5',
              shortName: 'Otsu',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/A6D4C1A9-4AF3-4E80-8762-3A9D7E8F3310_8F66C2C0-1656-445F-91F8-C80B1BBF2405.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9A6E0FA0-FFBE-4EB3-8A1A-79DA7FD12528_062A39F2-A8DE-44A8-BB6B-480176EE40B0.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/69C93B78-119E-481E-82DB-61BF20BB6EF0_DEF3378D-687E-4040-8C7C-44C6077FAA47.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4FA027DC-C03D-4881-A7FA-314C37C45138_6C8A9464-C04D-4860-9353-F97DFD699E60.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/98F90192-4FA2-4067-B501-8DD428DDB489_1828601D-6227-4763-87E1-566B3F39ACE2.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3313E1F8-4513-40EC-A4B1-BC0AEB23FA61_B5C6655E-C02D-45BB-B39D-DF00E94D46F8.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8EA133F9-164D-41A3-8175-2114832AC635_068E7D33-FF55-46AB-8A21-753420FDBE6C.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/F88A9319-DC76-4C5E-B28A-564A928248F0_2D0DC8D3-6FC0-43DF-8D10-CE4858569116.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/E6DC5895-8CD1-4D29-B3E0-E3F2E4AE6305_010B9A37-F2C6-4C6D-9493-D036F22B1244.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C5917A2B-F30F-4374-BD4B-45D9467F589B_119041E0-8FC8-40CC-8816-1BBB19A63184.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/AF47EBC1-432B-4C9D-B827-C6336D3E80F6_ECA017EB-3D67-4656-B678-EF5A9FD5FEA4.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/58C2F3F9-B696-4810-8CC4-6EB13B8D1BF7_489B2E00-17B7-41A6-A541-1FAFFC5A7BF4.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/84fa39aa-3df6-443a-8306-25c0eb844b7a_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B113809D-0125-44BD-8C79-D8F0BD15D0A9_165E16DE-4A8A-4A12-BA44-55E93A8AAD5E.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/dd878a74-51ef-4605-a537-55d4abd37c1b_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4C451A07-0C82-4350-BD5E-B5EC8E0BE8EA_F593368E-D928-46FA-B6C2-E2F2D03F36A3.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/09004343-dfb5-4ae8-8308-958d1797dc79_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B934F4A9-D75D-452C-9D13-643513C2BB0D_BD4D7F90-CE9B-448C-8C16-B59D36CED6AB.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/e9ae165c-2733-4eea-86f1-8442c0f1b630_video'
                }
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/F88A9319-DC76-4C5E-B28A-564A928248F0_2D0DC8D3-6FC0-43DF-8D10-CE4858569116.jpg',
              description: `<p>אז… זוכרים שהייתי בשוק אחד בקיוטו שידעתי שאחזור אליו בהמשך? ובכן, החלטתי להקדיש את היום לשוק הנ״ל.</p><ul>  <li>בתמונה הראשונה: חביתה יפנית עם פירות ים בטמפורה.</li>  <li>בתמונה השנייה: שוטים של סאקה ב-2.5₪.</li>  <li>בתמונה השלישית: שיפודי פירות ים.</li>  <li>בתמונה הרביעית: מתכוננים לט״ו בשבט.</li>  <li>בתמונה החמישית: פירות מטאיף (מסקרנני לדעת מי חוץ מאבא שלי הבין את הבדיחה הזו… תיקי? עופר?).</li>  <li>בתמונה השישית: סטפני.</li></ul><p>בערב כמובן שחזרתי לבר שהייתי בו אתמול (הפעם אחרי שעשיתי כביסה, כי אתמול בעצם נשארתי כל כך הרבה שהמכבסה השכונתית כבר הספיקה להיסגר). עוד הופעה חיה של מוזיקה קלה; שאלתי את בעל המקום אם יש אפשרות גם להופיע בעצמי, אבל הוא אמר שהם סגורים עם הופעות כבר לשבוע קדימה. נראה שהמקום די פופולרי בקרב השלושה-וחצי אנשים שגרים שם.</p><p>בסוף הערב, כשרק בעל המקום ואני נשארנו לבדנו, שאלתי אותו על המוזיקה שהוא אוהב ואם יש לו להיטים יפניים להציע לי להקשיב להם. מפה לשם מסתבר שהטעם המוזיקלי שלנו יותר דומה משנראה בהתחלה; לו רק יכולתי לתעד בתמונה כמה העיניים שלו נצצו כשהזכרתי בפניו להקה שהפעם האחרונה שהוא הקשיב לה הייתה לפני שנולדתי (Van Der Graaf Generator), וישבנו שנינו עד השעות הקטנות של הלילה להקשיב לצלילי רוק פרוגרסיבי של שנות השבעים.</p>`,
              id: 26
            },
            {
              date: 'November 20, 2024',
              degrees: '9°',
              name: 'Otsu #3⅓',
              shortName: 'Otsu',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B074EBA6-63CE-4464-8879-FCD0F64D06F5_9C94E299-6E9A-492E-879D-907609744BEF.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/E114B4ED-13B3-463C-8904-7B7990D9AE84_D0BD9CB2-8818-4577-B4AF-26AE5F614ACD.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/BAD37102-D63D-4472-9DEC-E70ED1404896_1C3B98B6-588C-45A4-BBD0-6EA2D4DFA43C.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8E126DA2-C114-475A-9664-23A902FCE8A1_7B54B071-1597-46EB-B68F-18A4148D4BDF.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/261766bb-23f9-4b6f-abc4-397c40144f59_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1DC7CA18-F3AE-4C73-9E28-B7117B1AA416_03418213-BB13-4686-A934-12B39F78C5AA.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/20b0c236-8cfa-4455-ad02-ab2ef4dbdd01_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7D65EF97-A3E3-4741-8B44-0EFD9A20C5EC_091DBF8A-47ED-4DB7-B643-DA595CA74B40.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/688bb0e0-b57e-4373-98a9-fc0f00f90c0c_video'
                }
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1DC7CA18-F3AE-4C73-9E28-B7117B1AA416_03418213-BB13-4686-A934-12B39F78C5AA.jpg',
              description: `<p>את הבוקר פתחתי במסעדה מקומית שהגישה… קשה לי לקרוא לזה ״אוכל איטלקי״, כי למרות שכל המנות שם היו פסטה / ספגטי, מה שקיבלתי בפועל היה יותר דומה ללזניה לוהטת שהכילה… ובכן, כל מה שלזניה מכילה. וגם אצות. וביצה חיה. ודלעת, חזיר וספגטי (כן, ספגטי בתוך הלזניה). היה מעולה.</p><p>לאחר מכן הלכתי לאונסן מלאכותי (זה נקרא סנטו, אבל עזבו טרמינולוגיה) שידוע בהיותו האונסן הראשון שהכיל בריכה חשמלית. הייתי חייב לנסות. בתור אחד שהלך להרבה סוגים של טיפולים בעבור בעיות הגב שלו, הבריכה אכן הזכירה את הטיפולים החשמליים מביניהם. קצת כמו ההרגשה כשנוגעים בגדר חשמלית - לא מספיק חזק כדי להכאיב, אבל כן מספיק כדי לגרום לי להרגיש מחושמל ולשרירים לקפוץ מעט. קונספט מעניין ביותר. בכניסה הראשונה שלי לבריכה החזקתי שם בערך 3.8 שניות לפני שיצאתי. לאחר חצי שעה נכנסתי שוב והפעם הצלחתי להישאר שם מעל דקה, אבל לא הבאתי את עצמי למצב שבו כל הגוף שלי במים; הצלחתי להיכנס רק עד המותן.</p><p>אחה״צ אכלתי במסעדה הודית כמיטב המסורת ביפן (תמונה שנייה), והחשתי פעמיי לכיוון הבר שהעברתי בו את שני ערביי הקודמים, לא לפני שמצאתי עוד סטודיו שמצאתי בדרך והחלטתי להיכנס לנגן בו לשעה קלה. 12.5₪. אלוהים. כמעט התפתיתי לשאול אם אפשר לישון בסטודיו הזה 😆</p><p>אגב, חדי העין שביניכם אולי הבחינו בכך שאמרתי שאני אשהה באוטסו שני לילות, ובפועל אני מתקרב לכיוון הלילה השלישי… ובכן, ביקשתי להישאר עוד לילה בבית ההארחה שאני נמצא בו כי השהות בבר שווה בעיניי יותר מהדברים האחרים שחשבתי לעשות ביום האחרון שלי בקיוטו. אז כמובן שחזרתי לבר ומצאתי בו עוד מוזיקה חיה שערבה לאוזניי. המקומיים כמובן מקבלים את פניי בברכה כי הם כבר מכירים את התייר הישראלי עם השיער הורוד שעובד באינטל ואוהב מטאל.</p><p>גם הפעם נשארתי עד מאוחר, ואחרי שרוב האנשים הלכו שאלתי את בעל המקום אם אפשר לנגן קצת. הוא הסכים לי. פה התפלאתי פעם נוספת מהטעם שלו (ושל שאר המקומיים) במוזיקה - הם ממש אוהבים Punk. אני מזכיר שכולם גדולים ממני שם לפחות ב-20 שנה, ובעל המקום ספציפית נראה בן 60 לפחות… ועדיין כשניגנתי The Clash ו-Ramones על הגיטרה הם תופפו ושרו בהתלהבות. אחד מהם החזיק בידיו מצלמה מקצועית ואף צילם אותי, אז שמרתי איתו על קשר וביקשתי שישלח לי את התמונות כשיהיו לו. הוא הסכים ברצון כמובן 😇</p>`,
              id: 27
            },
            {
              date: 'November 21, 2024',
              degrees: '13°',
              name: 'Yudanaka',
              shortName: 'Yudanaka',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3B45CB78-E298-4296-9658-71CDE2E701DC_208574D5-6113-42CD-8BEB-DEAAA82579C7.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/40567F40-1B04-44DD-93F4-B73DBB7DD067_91CB152F-26B3-44E5-9740-2258651F46D2.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/A56DF3ED-CBF9-41E2-A77D-A9892D146ADF_45DA9288-A215-4B8A-B254-1888A4E02E1D.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/A56DF3ED-CBF9-41E2-A77D-A9892D146ADF_45DA9288-A215-4B8A-B254-1888A4E02E1D.jpg',
              description: `<p>היום כלל ברובו נסיעה ארוכה לעיר מרוחקת מקיוטו בשם Nagano (נגאנו). אין לי יותר מדי מה לספר על יום של נסיעות, אז להלן רצף בדיחות קרש על יפנים:</p><ul>  <li>איך קוראים ליפנית לחוצה? ג׳פאניקה.</li>  <li>איך קוראים לנהג מונית יפני? אישימוטו.</li>  <li>איך קוראים ליפני שלא יודע להכין סושי? אובד אצות.</li>  <li>איך קוראים ליפני? טנקה (זו לא הבדיחה רגע אני מבקש לא לצחוק עדיין).</li>  <li>איך קוראים לבן של יפני? טנקה-סאן.</li>  <li>איך קוראים ליפני דיסלקט? תקנה.</li>  <li>איך קוראים לילד יתום של יפני דיסלקט? חסר-תקנה.</li>  <li>למה החלטות של לוחמי סומו הן מוצלחות? כי לפני שהם מחליטים, הם שוקלים הרבה.</li>  <li>למה ללוחמי סומו קוראים סומו? כי תמיד כשאחד מהם מפסיד בקרב הוא אומר ״סומו, איך אני מוריד עכשיו בחזרה 160 קילו״.</li>  <li>מה המאכל האהוב על אמני אוריגמי? מקופלת.</li>  <li>למה יפנים לא שומעים מוזיקה בסטריאו? קימונו.</li></ul><p>תודה רבה לכל מה שהשתתף, נתראה בפרק הבא.</p><p>בתמונה האחרונה: עוגיות משקפיים.</p>`,
              id: 28
            },
            {
              date: 'November 22, 2024',
              degrees: '13°',
              name: 'Snow Monkey Park, Nagano',
              shortName: 'Nagano',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/A35D4426-3F39-4A31-AEB7-FEA27E809C8F_3BD08C83-B32A-4BFD-BED5-1F378FFC863D.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/EA304472-5BDB-4282-81CC-F9449656C47D_A52D38E9-C6D6-486F-AA9D-68FA7321F5E5.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/31CE0A0A-1F26-47B5-A0D6-4D4B4D383D21_F1FA7DCF-35B2-43C5-ACBF-94CE42A2553E.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9BB6DE22-7CB3-4DBF-81F2-FE88A1350A23_6A0E8FC0-CE89-4C2F-800A-878EB574935D.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/74CB2A4D-752B-46AA-A41D-0400E22C6550_31AA9B19-B7CD-4FE8-ABAE-B91238B69F4F.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C65F0702-12FB-4F92-9184-BD09958EFC5E_DE6F25E7-8970-42D9-8EEB-933D1E1D52E2.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/58CAF5C2-9634-4C5E-9F0D-906D1F548312_5FB12BF3-8170-47AE-978A-70667B23891F.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D976CEEA-FC67-43DC-AC4B-2599C364F8A2_DB15D91F-0EF3-4317-94CB-C2476748C308.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/599fbc73-186f-4df7-bc16-a7b9ab59fa41_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/BA7A8706-FE7D-4925-8ECB-86CEA8F1126D_BFBFAE58-3D32-4586-AAE8-CB24DB2BE063.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/50cfbdc2-3b62-476f-8359-94c1da161aa9_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1E82C576-C857-462F-BFFF-5F1E2B08C999_B64DF279-AA0A-4841-8804-8778DFE8CB80.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/DACE9D23-E009-4CE5-9302-3012FABEE730_62A3F318-24DD-494E-905A-7A1366A5F3A5.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/67A9AE0C-1A77-4585-B40B-475980ACD45E_D112F518-00EB-4621-9243-0CB9A33D3212.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/A35D4426-3F39-4A31-AEB7-FEA27E809C8F_3BD08C83-B32A-4BFD-BED5-1F378FFC863D.jpg',
              description: `<p>היום הלכנו לפארק של קופי שלג, שבו קופים יורדים למעיינות החמים הטבעיים להתחמם במים שלהם בחודשי החורף, כמובן בהרמוניה עם נוכחות בני האדם ברקע.</p><p>אין לי מה להכביר במילים, התמונות מדברות בעד עצמן.</p><p>בסרטון האחרון: happy ending.</p>`,
              id: 29
            },
            {
              date: 'November 23, 2024',
              degrees: '16°',
              name: 'Arriving at Yokohama',
              shortName: 'Yokohama',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8129F1C7-8D45-48C7-9E88-214038C102CD_A46B68B8-94D4-436F-8794-A4A00ED35B7D.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/74DE12B5-3BA6-4CFD-8EB7-B7E1880FC266_FA280698-D3A6-477F-A08B-830C8D97AB4A.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CB8F7FBD-4C4A-4EDC-B5BD-18E50621BDD2_B05DAAA1-E634-4CBB-92A1-DDCA24886338.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/74DE12B5-3BA6-4CFD-8EB7-B7E1880FC266_FA280698-D3A6-477F-A08B-830C8D97AB4A.jpg',
              description: `<p>אז מה היה לנו עד עכשיו? בואו נבחן רגע:</p><ul>  <li>הייתי בטוקיו שהיא כמו ת״א של יפן.</li>  <li>הייתי בהאקונה שהיא כמו הסחנה, מקום לחופשה קלילה בעבור מקומיים ובעבור תיירים.</li>  <li>הייתי בקיוטו שהיא כמו ירושלים, עתיקה ומעניינת (ואפילו הייתי בשוק מחנה-יהודה שלהם) אך פחות תוססת.</li>  <li>הייתי באוסקה שהיא כמו חיפה, היא מתלבשת רק בצבעים חמים. היא חיים. היא מפוצצת בוויפיי. היא ב-500k הגיישות הנחשקות של ״Time Out״. עוד בדיחות איתי-זבולון מרציפן כגון.</li>  <li>הייתי בקובה שהיא כמו עוספייה, היא קרובה לחיפה והולכים אליה רק בשביל הכנאפה.</li>  <li>הייתי באיבאראקי שהיא כמו חדרה, נמצאת בדיוק באמצע בין שתי ערים גדולות (חצי שעה לכל עיר), אבל יש בה בדיוק 3 מסעדות ובר אחד.</li>  <li>הייתי באוטסו שהיא כמו ראשל״צ, לא רחוקה מהמרכז ויש לה אחלה חופים.</li>  <li>הייתי בנגאנו שהיא כמו קיבוץ קליה, די מרוחק והולכים אליו רק בשביל אטרקציית טבע ספציפית אחת.</li></ul><p>היום חזרנו לטוקיו (אחרי שפתחנו בארוחת בוקר לעילא ולעילא), הסתובבנו בחנות של ימאהה (כלי מוזיקה), קניתי פייה לטרומבון ב-750₪, הלכנו לאפל כדי לנסות לקנות לי אייפון חדש עם ההנחה של יוני בתור עובד אפל (נכשלנו במשימה, אבל המסירות של יוני למשימה ראויה להערצה עד כדי כך שהוא חיפש איך עושים חבילת סמסים מהארץ ליפן רק כדי שיוכל לאמת את זהותו בסמס בתור עובד אפל ולאפשר לי את ההנחה בחנות שלהם).</p><p>משם המשכנו לבר לחגוג את הלילה של יוני ביפן לפני שהוא טס לניו-זילנד, ואני המשכתי לעיר הבאה שאשהה בה - יוקוהאמה (שהיא כמו בת-ים, הן מבחינת הקרבה למרכז והן מבחינת הפשיעה).</p><p>מחר אלך לפגוש חבר יפני שהכרתי בסחנ-, אה… בהאקונה. הוא גר ביוקוהאמה ואמר שישמח להראות לי את האזור. ביי יוני, טיסה נעימה לניו-זילנד!!!</p>`,
              id: 30
            },
            {
              date: 'November 24, 2024',
              degrees: '14°',
              name: 'Kamakura',
              shortName: 'Kamakura',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9905D1D1-9333-4129-9E71-4B41DDE74804_A674B704-D761-49EC-952D-0EF3FB015FFF.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/12822057-2050-4401-89AA-7794C18754E7_23D39AF0-11B4-45D3-AB29-076BF270579E.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/79A3DD7A-CF89-47C6-9DED-50DB68C32F7E_5099D986-EB74-4C6C-A448-41E065DB4003.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/34E4F2B8-A643-420E-BD83-FAB9260CEFA1_A8B6EA96-960C-4392-9644-68C4718ABDE0.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/81F0E059-E9F7-4905-9BAD-3E45A3822D42_6437A2FB-826A-42AF-95C5-11B970E15B69.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C46C7BBB-DDD5-4791-B225-5A257F334DEB_E636FF26-4C92-4DD7-BACF-C6A2BEA3FF92.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/33969403-AE3F-4BAE-8EDD-D0BEAA97B293_0118FB0C-FA88-4BA3-8F3F-2DEEF441FAF8.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1CF6B978-DCA3-4033-A8D8-8E55ADACFCB0_4506EB51-1329-49C1-9D8D-A4297426355D.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/A1C7D2FD-9951-4E61-AEE3-FBB94D4615D6_0B717E6C-0051-422B-BE1F-7D4D1D17BA9E.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9905D1D1-9333-4129-9E71-4B41DDE74804_A674B704-D761-49EC-952D-0EF3FB015FFF.jpg',
              description: `<p>היום ב-12 בצהריים נפגשתי עם טאקי בתחנת הרכבת של קמאקורה, שהיא עיר (או שכונה? אני לא בטוח) השוכנת מעט דרומה ליוקוהאמה, המקום שאני כרגע נמצא בו.</p><p>טאקי זה כמובן לא השם שלו, אבל השם שלו ארוך ואני לא זוכר אותו כי אף פעם לא משתמשים בו, אז טאקי זה הכינוי (כמו ״יהונתן״ ו-״יוני״). זה אגב הבחור שפגשתי בהאקונה לפני שבועיים ושמרנו מאז על קשר.</p><p>טאקי הראה לי את האזור; הסתובבנו במקדש שינטו, מקדש בודהיסטי, שוק קטן שאכלנו בו אוכל ארגנטינאי טעים ולאחר מכן אוכל יפני מסורתי שאני לא זוכר איך קוראים לו אבל הכיל אורז ובשר ו… אולי זו הגרסה היפנית של פּלוֹב. טעים בקיצור. במשך כל הזמן הזה דיברנו, סופסוף מצאתי מישהו שילמד אותי קצת לקלל ביפנית.</p><p>בערב חזרתי למלון הקפסולות שאלון בו ביומיים הקרובים. הוא שוכן ממש בליבה של ה-Chinatown, רובע סיני מקסים ששוכן בפאתי יוקוהאמה. כל הרובע מלא באמנות סינית, אוכל רחוב ומסעדות סיניות, חנויות של פיצ׳פקעס למיניהם, והכל די בזול. קניתי שם 5 חולצות של להקות שאני אוהב במחיר של חולצה או שתיים בחנויות בקיוטו.</p><p>בתמונה האחרונה: דוגמה לאוכל רחוב סיני. זה פשוט שניצל. נטול פיתה ונטול כל דבר אחר. אני תוהה כמה כבר מסובך יכול להיות לקחת שני בחורים, להקים דוכן ולנהל מהארץ עסק של שניצל בפיתה ביפן. יש לי תחושה שזה ילך חזק 😎🐥</p>`,
              id: 31
            },
            {
              date: 'November 25, 2024',
              degrees: '14°',
              name: 'Yokohama',
              shortName: 'Yokohama',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/DF003376-9A11-4AC9-809E-72C7466D4BA2_D7E3CBB0-0EB6-475A-8A8D-DC193B23E592.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/842AAD6C-36B7-408A-8BAE-FA5D6B5D4FAA_3D5D43AE-FEF9-4149-8345-D088425E3FDA.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4E210362-6C57-48DD-84D3-8D39713332FB_D6629FDC-FC75-45E7-8B8A-F5D0428A39DD.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0D8A158F-2288-446F-87CB-70FFDE614912_81CD6D95-BD04-4674-9672-0BE3DE43656A.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D19098CD-545E-4ECE-90AE-D731EA1FE7C9_D7C46FA4-14E5-4B70-A20F-461C7017265B.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/AC3B080C-94C3-4A07-B00E-A0B54CF66C66_6A620EBC-0AB9-49DE-BDD6-CAD04DF90E26.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5A36DB95-C051-491A-AD1E-C36206F25D3D_9BE92C6B-6839-4E74-87E3-5D37BC238E8A.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/79ED1185-ED0A-4FBD-955A-ECA42522428B_AC729690-C019-43E3-BB00-1047B7BCDA9D.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D19098CD-545E-4ECE-90AE-D731EA1FE7C9_D7C46FA4-14E5-4B70-A20F-461C7017265B.jpg',
              description: `<p>פתחתי את הבוקר בסיור במקדש הסיני ששוכן ממש מול המלון שאני נמצא בו. משם המשכתי ליוקוהאמה לקנות כרטיס סים יפני כי מסתבר שבשביל להזמין כרטיסים לקונצרטים חובה מס׳ טלפון יפני. אכלתי בדרך בהרבה מסעדות שראיתי בדרך, בכל מסעדה הזמנתי מנה אחת קטנה. באחת מהן הזמנתי קציצת המבורגר (רק הקציצה, בלי הלחמניה), וזו בעצם הייתה הפעם הראשונה ביפן שביקשתי מזלג וסכין כי אין לי מושג איך המשוגעים האלו אוכלים קציצת המבורגר עם מקלות אכילה יפניים 😆</p><p>בין היתר נכנסתי לחנות אלכוהול, וראיתי בקבוקי וויסקי בצורות של כל כך הרבה כלי נגינה. לא קניתי כי ״יקר פיצוצים״ כמו שאומרים הצעירים, אבל היה נחמד להסתכל :)</p>`,
              id: 32
            },
            {
              date: 'November 26, 2024',
              degrees: '14°',
              name: 'Bye-bye Yokohama!',
              shortName: 'Yokohama',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/BB66CCAD-5896-40FC-99A3-53F834448D90_7C460434-3B01-4666-A3BC-343D5402D3E4.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/BB0F62C0-7C42-4EB3-AE3C-37A7690F1519_C1098474-7554-47F6-8FFC-F20EBEB1DF58.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/50B493F7-E4CC-429A-B2A9-38D4483A0CF4_86EFA1D6-752C-4B74-8661-1CF6355F7B89.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8B6A6CDA-8FC4-41C4-BF20-6DF77383CC01_DFE627A3-7782-4CA1-9AA6-C99837AA9B48.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8B6A6CDA-8FC4-41C4-BF20-6DF77383CC01_DFE627A3-7782-4CA1-9AA6-C99837AA9B48.jpg',
              description: `<p>גם את היום החלטתי להעביר בהרבה מסעדות כדי לטעום דברים שאני לא אוכל ביומיום. לאחר שהכנסתי לקיבתי אוכל סיני כיד המלך ודג סלמון אחד שהוא אולי דג הסלמון הכי טוב שאכלתי מעודי, המשכתי לתחנה הבאה: מלון גרפי בשיבויה, טוקיו.</p><p>בעצם כבר הייתי במלון הזה בתחילת הטיול, ומאוד אהבתי את האווירה בו בכלל ואת האזור המשותף בו בפרט. את רוב הערב העברתי באזור המשותף הזה, שיש בו סולחן שנוקר, שתייה ונשנושים חופשיים, ובעיקר אנשים טובים. התחברתי שם לבחור הודי, זוג בריטים, זוג אמריקאים, זוג גרמנים, בחור הולנדי ובחורה קוריאנית מקסימה. ההולנדי והקוריאנית מככבים בשתי התמונות האחרונות.</p><p>עם ההולנדי אגב כבר קבעתי מפגש נוסף בהולנד בינואר כשאבקר שם כחלק מהטיול שלי. החיבור בינינו נוצר די מהר והעמיק יותר בכל רגע כאשר מתחנו את גבולות ההומור השחור אחד של השני וגילינו ששנינו מספיק חסרי נשמה כדי לצחוק מהדברים הנוראיים ביותר שאפשר להעלות על הדעת (לצורך העניין, הבדיחה ששברה את הקרח הייתה כאשר שיחקנו ביליארד והוא אמר שהוא אוהב לראות איך אני מתרכז לפני שאני נותן את המכה, אז מיד אמרתי לו שאני יהודי ולכן ברור שאני מבין בריכוז. שברה את הקרח אמרתי? יותר כמו ניתצה אותו לרסיסים 😝🧊).</p>`,
              id: 33
            },
            {
              date: 'November 27, 2024',
              degrees: '21°',
              name: 'Tokyo Opera City Concert Hall #1',
              shortName: 'Tokyo',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0ED4CFF8-DF5B-4FFC-845D-51518BE61CCB_C368EE3F-5261-4501-B6F4-B06F3168C119.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7E756DFB-97B0-4859-84DB-891CA6BA5F5C_C6A8D6DA-406D-4851-A629-2646D5440AD5.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/30C7A0E2-86BB-4987-A997-FD09F4DC47D1_B4D57E8F-A96D-4D5D-B9C7-D58AB7FBC263.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B6B1EC77-CF54-4230-A1E3-F84075CB1A1C_B5211C75-1DD8-4B25-8727-9D5074101CC6.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0ED4CFF8-DF5B-4FFC-845D-51518BE61CCB_C368EE3F-5261-4501-B6F4-B06F3168C119.jpg',
              description: `<p>את החצי הראשון של היום העברתי בשיטוט ברחובות העיר טוקיו, כניסה למסעדות שונות, וקניית כרטיס סים מקומי אחד כי מסתבר שבלי מספר מקומי אין אפשרות להזמין כרטיסים לקונצרטים מסוימים.</p><p>את החצי השני של היום העברתי בהתארגנות, לבישה של החליפה המהודרת ביותר שיצא לי ללבוש מעודי (קניתיה בשבוע הראשון שלי בטוקיו), ויציאה לקונצרט הראשון שלי ביפן.</p><p>מה בתכניה? לחנים סימפוניים, פרי יצירתם של בני אדם ובינה מלאכותית יחדיו.</p><p>מה התוצאה? גרוע.</p><p>ובהרחבה? גרוע ממש. כנראה היצירה הגרועה ביותר שיצא לי לשמוע. אציין לטובתם שהיצירתיות גאתה ביצירה הזו: הנגנים נשפו לכלים, שאפו לכלים, הכו בכלים ובאופן כללי הפיקו צלילים ויצרו אפקטים בדרכים יצירתיות שלא יצא לי לשמוע או לראות בעבר. אבל… זה כל מה שהיה שם (לפחות בעיניי). אוסף של אפקטים צליליים. לא מלודיות, לא הרמוניות מעניינות, ובפרט לא מוזיקה. נו שוין. אני עדיין אופטימי בנוגע לעתיד של מוזיקה ובינה מלאכותית; זו כנראה הייתה רק דוגמה לא מוצלחת לשילוב של השניים.</p><p>בתמונה הראשונה: אני והבחור שלידי, מחכים שהקונצרט יגמר.</p>`,
              id: 34
            },
            {
              date: 'November 28, 2024',
              degrees: '18°',
              name: 'Tokyo Opera City Concert Hall #2',
              shortName: 'Tokyo',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B4CC96AE-C462-4BD7-92BF-4F81A28DE21C_F34CD77D-B20A-4E79-BC67-F0724E1F228F.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CB422E9B-FD1B-449E-ADAC-CC634B77E927_23DD2A3F-9C78-413B-B277-03C9D39EE7A2.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1FDE2627-E8E1-46E6-8772-A22D0A0D6EF0_B3ACA8B0-4092-4093-A038-822C5202C0BA.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/711e6ccd-8e9b-4af3-85f5-65063c6cc652_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4634FDE3-CDA4-47E5-8846-897D1F8F3D7C_208BA1BB-712E-4A46-8E09-B73D80FE4221.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/63BC506F-46F7-4634-8E8B-D146CD744382_F819F414-AED7-4EBD-BF33-AF61F5B9A8C8.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/DABBD22A-F7CB-4EDD-8036-739C92C95A3F_ABA2219B-0A3D-4C8E-9194-88ADD559BA2F.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/77EA22A9-8F2C-4DDB-9CC2-836644D592E8_594C46EF-0C09-4FAD-9AA7-5A23A90214EB.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1B6C4EDE-94DA-4333-98EE-715F5940219E_EAC91E30-EDF7-4282-AC7F-37DA8E8B87E5.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1B6C4EDE-94DA-4333-98EE-715F5940219E_EAC91E30-EDF7-4282-AC7F-37DA8E8B87E5.jpg',
              description: `<p>אתמול בערב כשהייתי בטרקלין של המלון ודיברתי עם החבר׳ה, יצא לי לספר שיש לי חלום קטן לנגן ברחובותיה של טוקיו, ב… לא משנה במה בתכלס. פשוט לקחת כלי נגינה ולמלא את הרחובות בצלילי מוזיקה של משחקי מחשב וכל מיני שטויות שיפנים אוהבים.</p><p>אחד החבר׳ה, שיצא לו לשמוע אותי מנגן, החליט שאנחנו הולכים לנסות להגשים לי ביחד את החלום הזה. אז בעצם את כל החצי הראשון של היום העברנו בשיטוט ברחובות העיר טוקיו תוך חיפוש אחר מקום שיסכים להשאיל כלי נגינה כלשהו לכמה שעות. מצאתי מקום שכזה בשבוע הראשון שלי בטוקיו, אך זה היה באזור שרחוק מהמלון הנוכחי שלי. עברנו חנות אחר חנות לפי גוגל, ו… ולא מצאנו אפילו אחת שתסכים להשאיל כלים :(</p><p>לא נורא. ראיתי גיטרות מגניבות ויצא לי לנגן עם פדאל אפקטים לבס שיעלה הרבה מאוד כסף בארץ (וגם ביפן הוא עולה 400₪, אבל החלטתי לוותר על התענוג כי כנראה שלא אשתמש בו יותר מדי אם בכלל).</p><p>בערב הלכתי לקונצרט השני שלי בטוקיו: הפעם קונצרט קלאסי שמורכב מדואט של פסנתרן יווני וצ׳לן יפני. פיצוי נהדר על הקונצרט המגוחך של אתמול. היה תענוג לאוזניים.</p><p>בתמונה הרביעית מהסוף: קישוטים לכבוד חנוכה.</p><p>בתמונה השלישית מהסוף: גם בחליפה מכובדת אני ממשיך לעשות פרצופים מוזרים ונראה מישהו עוצר אותי.</p><p>בתמונה השנייה מהסוף: יוני וחבר׳ה נחמדים בטרקלין של המלון לאחר שההודי ביקש שנעשה איתו תמונות.</p><p>בתמונה האחרונה: ההודי מכריח חבר׳ה שאומרים לו באופן ישיר וחד משמעי לחלוטין שהם עייפים ורוצים לישון וממש *לא* רוצים להצטלם לעוד תמונות… להצטלם לעוד תמונה.</p>`,
              id: 35
            },
            {
              date: 'November 29, 2024',
              degrees: '16°',
              name: 'SEGA Joypolis',
              shortName: 'Joypolis',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4297313F-D8AE-4AA4-BA5E-C4010F5CA54F_0AE85053-B7BE-4E1B-8510-6B5BF95F3DA0.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7FB7E834-D8A4-4E55-8AD5-133DA4CAF5C6_B4280F08-60C8-46EF-BB13-EA2D9900E6BF.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/65ABBB9A-FCCF-4587-BF55-5830873132FF_4AAC6965-B581-4F88-97D1-CFCBE5BBC922.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/DC3585FB-EE29-463D-B25F-443A3C8E9E1C_076087D8-BA82-43E4-B937-E703DB730053.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B0D3BB2C-4396-4C0A-A236-567CB953A480_AF10FCF4-447C-4ABB-B721-BB7AE987590D.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/ffae3c8b-22ea-4dbb-985e-2f765a10b762_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/47653A5C-62BF-42E6-8845-971AC331B0BF_C5F4C07F-3612-4620-9FDD-A4162E1FA052.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/47515288-2731-415e-91b7-723f85583ba8_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/DCAF8BE6-8A5D-48C7-A869-4944BC9E215A_0509A0A9-B5E7-4771-8207-2B4B42BC961E.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D06B6786-D39C-4228-8E60-CA6A3C363128_4D948E5F-6E79-4437-AF5F-DA29036B6C84.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/F1687549-B898-4426-8584-849C92238AD0_03940AB5-33BC-4674-AF8B-FE073366B44B.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4297313F-D8AE-4AA4-BA5E-C4010F5CA54F_0AE85053-B7BE-4E1B-8510-6B5BF95F3DA0.jpg',
              description: `<p>לאלו מכם שלא יודעים, אני מעריץ של סדרת המשחקים ״סוניק הקיפוד״. ולפי התקנון, בתור מעריץ חובה עליי לפחות פעם אחת בחיי לעלות לרגל למקום הקדוש עבור מעריצי הסדרה - הג׳ויפוליס של סגה (זהו מסע עתיק יומין שמכונה בלשון המקומית ״חאג׳ויפוליס״).</p><p>אז מה זה בעצם? בגדול זה פארק שעשועים, דומה ל-Universal Studios שהייתי בו לפני כשבועיים, אבל הרבה יותר מצומצם וסובב בעיקר סביב סוניק.</p><p>בפועל… גיליתי שהמקום מיועד יותר לילדים (בניגוד ל-Universal שיועד לילדים ולמילניאלים כאחד). רוב המתקנים בו היו די משעממים וחסרי עניין. מה שכן, היו בו כמה מתקנים שיתופיים שזה משהו שלא ראיתי ב-Universal - למשל המשחק שרואים אותי משחק בסרטון השני. אמנם בסרטון שיחקתי לבד, אך בהמשך שיחקתי בו באופן תחרותי עם חבר׳ה שהכרתי במקום (היה נחמד להכיר עוד מעריצים בגילי), והיו גם מתקנים אחרים תחרותיים שהיה נחמד לעלות עליהם ביחד עם אחרים.</p><p>בתמונה הרביעית: יוני אוכל בפעם הראשונה בחייו את המאכל האהוב על סוניק… Chili Dog. שזה בעצם נקניקייה בלחמנייה (אבל יש לזה שם מגניב יותר אז זה בעצם מאכל אחר לחלוטין).</p><p>בתמונה האחרונה: יוני רואה שביל מסתורי ואפל, אז כמובן שהוא חייב להיכנס אליו ולראות לאן הוא מוביל.</p>`,
              id: 36
            },
            {
              date: 'November 30, 2024',
              degrees: '16°',
              name: 'Baba Ramen',
              shortName: 'Baba Ramen',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/E6E8F83A-0F76-4590-B18C-EB1B93E30E99_4EAF60F6-D1AF-4F87-9B7C-4E21D3C778D6.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4B17E212-9E30-4C96-9730-F35C34408844_BCC1D8C4-CA4D-4A9A-BD99-C63FADE286CC.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CF97A6A3-02F5-4EBB-9CE6-2F42B085C507_E4E7152C-0794-44C5-9FB9-06CE67A3B0E2.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0E85B604-D052-4888-8FBE-EA936DD277CA_15CF3CA4-E8CA-4C5A-AA69-CD58E51B1E8E.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/362e0129-e8f3-40cc-97ed-ddafa5944b83_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/53E94E75-BB2B-4B6E-8075-5F5A6EE23874_C663792D-011F-43FF-99DC-8F0C125D2598.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/069BC300-61A2-4D56-B331-B251477DA013_72DB34B4-90DE-4CFE-BC22-205A1979D37B.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2408D0D1-2433-43D6-84B0-12F99EB5385D_42C2D07F-B601-4911-80BB-40E73D253DB0.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/E6E8F83A-0F76-4590-B18C-EB1B93E30E99_4EAF60F6-D1AF-4F87-9B7C-4E21D3C778D6.jpg',
              description: `<p>התלבטתי איך לכתוב את הצעד הנוכחי כי בעצם… מדובר בהמשך ישיר של הצעד הקודם. במילים אחרות - לאחר שחזרתי מהג׳ויפוליס, הייתי צריך להתארגן וללכת למלון האחרון שאשהה בו ביפן לטיול הנוכחי; בפועל מה שקרה זה שהסתובבתי עם חבר׳ה שהכרתי במלון עד 4 לפנות בוקר ברחובות טוקיו בין בר לבר. היה שווה את זה לחלוטין כמובן. היה מעניין גם לראות את טוקיו בלילה - יותר הומה, יותר אגרסיבית, עימותים בין תיירים למשטרה, אנשים מקיאים בכל פינה (בכל פינה!! הניקיון המפליא של רחובות טוקיו הוא מסתורין שאולי לעולם לא אפענח אחרי שראיתי כמה אנשים מקיאים ברחובות בלילה). כיף חיים.</p><p>בסביבות 4 חזרנו למלון, התרחצתי בנחת, התארגנתי ויצאתי למלון החדש שלי. למזלי היה מדובר בצ׳ק-אין עצמאי, אז יכולתי להגיע מתי שרק רציתי. במלון רק הנחתי את חפציי ומיד יצאתי בריצה לאטרקציה הבאה שלי בעיר: סדנת בישול ראמן.</p><p>בסדנה, שאורכה כ-3.5 שעות, למדנו אודות ראמן ואיך להכין אותו מ-0 (לרבות ההכנה של הנודלס). בנוסף, למדנו להכין גיוזה, שזו הגרסה היפנית לכופתאות בשר (🥟). היה טעים, מעניין ומקצועי.</p><p>לאחר הסדנה חזרתי למלון, התרסקתי על המיטה, וקמתי בערב רענן ומוכן ללילה האחרון שלי בטוקיו. הלכתי לבר מקומי (הייתי באזור פחות מרכזי של העיר), וזו הזדמנות טובה להזכיר שערכה של חברוּת טובה לא יסולא בפז, כי אוון (השותף שלי לדירה ב-3 השנים האחרונות) הוא הבנאדם שבזכותו ידעתי איך להשתלב בבר בתור זר שלא יודע את השפה, ולעשות זאת בצורה די מוצלחת.</p><p>בתמונה האחרונה: לילה אחרון בטוקיו.</p><p>במהלך הערב יצא לי להתחבר לאחד החבר׳ה בבר שידע מעט אנגלית. הוא בן 24, מתכנת, מוזיקאי (יש לו להקת פופ יפני), וממש אתמול הציע נישואין לחברה שלו, אז מעתה הוא גם מאורס. אחלה בחור. התחברנו די מהר, והחלטנו שמחר אנחנו הולכים להיפגש ולנגן ביחד לפני שאני ממשיך הלאה להוואי. סופסוף תהיה לי הזדמנות לנגן קצת עם מקומיים, שזה משהו שכבר ציינתי באחד הצעדים הקודמים בטיול שרציתי לעשות ולא יצא לי.</p><p>מהמם.</p>`,
              id: 37
            },
            {
              date: 'December 1, 2024',
              degrees: '16°',
              name: 'Sugamo',
              shortName: 'Sugamo',
              media: [
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/BFC5F68B-3A58-4A11-AFC6-82D09BF7E2DE_022A1322-EF22-4B4A-A56B-59C8C48B32EE.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/1ed34a54-6a08-4755-b993-3acbe72bfde4_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/F3A9E1B2-69A9-4C50-B4B6-9910AB33A60B_1B063147-D74A-419C-A1CC-153258C8DCE5.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/8946fae6-c3a1-42cd-a0a4-2d3ea4055375_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/78A7B06C-4F28-4864-9266-26F7FA1E3E0C_71E46733-882B-49E1-831E-707DD76A9F3F.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/103417e7-7831-487e-b093-bf2bb3bbed6e_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/020340B7-A133-4042-96DC-28054062B372_B8AF9087-DD38-4994-A727-A5229A507FF9.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/4d985017-a396-491d-aac4-d0b07cab7a88_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D2A96014-7FF4-4474-858F-DF8F685C1662_6CA6AD22-8FD2-427E-989E-2B3E8F1725D2.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/f0f6241c-a5c6-4166-8f1b-f5d640d5557d_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7DC5E0E6-E17C-480D-9E36-AF0CE4596C64_B997CF45-1438-47FC-B28B-51ADC4528699.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/423FB2E9-F74C-4671-80A4-BB20E56FEEAE_7B728C44-707C-4B55-97B1-6841CFF62CBA.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/EC877AC8-DAF4-4B05-882A-C16E90B6EA46_FB01295E-25ED-4432-8A98-9EE068E6CAE4.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4BBD89A6-CA25-4EBA-B7DD-CE01EF4F88D9_AEDF66E7-9F0A-4363-9ED4-CBC45336399E.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8564884D-1BB8-490D-BEB3-CFB5787FDE1D_3B532FB0-22E8-495D-9128-8EB79189DEA2.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/F3A9E1B2-69A9-4C50-B4B6-9910AB33A60B_1B063147-D74A-419C-A1CC-153258C8DCE5.jpg',
              description: `<p>אז כמו שאמרתי, הכרתי אתמול בבר בחור נחמד ורציתי לנגן איתו ביחד; אז היום דבר ראשון על הבוקר נפגשנו והלכנו לאכול צהריים כי בעצם רק נפגשנו ב-11:30 (זה מקובל בקרב אלו שרק חוזרים הביתה ב-05:00).</p><p>משם המשכנו לחדר חזרות אקראי שמצאנו באזור והרעדנו את הקירות עד שבית המקדש נפל על הרצפה.</p><p>בסרטון הראשון: שיר שאני אוהב.</p><p>בסרטון השני: שיר שרוקי אוהב (כןכן, זה שמו).</p><p>בסרטון השלישי: שיר שכבר העליתי בפולארסטפס שלי, אבל הפעם בדואט.</p><p>בסרטון הרביעי: שיר מקורי של הלהקה של רוקי.</p><p>בסרטון החמישי: יוני מלמד את רוקי לג׳מג׳ם (=לאלתר ביחד מנגינות).</p><p>לאחר שניגנו נפרדנו כידידים, הוא הלך לבשל ארוחת ערב לבחירת ליבו ואני רצתי להספיק למלא את המזוודה שלי בחטיפים לפני שאני בורח מהמקום הזה עד להודעה חדשה.</p><p>לקראת הערב הגעתי לשדה התעופה, עמדתי בתור לדלפק לעשות צ׳ק אין, וכשהגיע תורי… ברוסית אומרים במקרים כאלו ״פיזדץ״. הייתה לי שגיאת כתיב בהזמנה של כרטיס הטיסה שלי (יונתן / יהונתן), ולא נתנו לי לעלות על המטוס עד שאשנה את השם. אחרי 4 שעות של פינג פונג מייגע עם חברת התעופה ועם סוכנות הנסיעות (כאשר כל חברה טוענת שהשנייה אחראית על שינוי השם), הבנתי שהכרטיס הנוכחי הלך פייפן, ועדיף כבר לקנות חדש וזהו. ביקשתי לקנות אחד חדש לטיסה הבאה (24 שעות לאחר הטיסה המתוכננת), אך גם כאן נתקלתי בסיפור, וכבר התחלתי לצחוק עם הדיילים שאני חייב יותר שיתוף פעולה מהצד שלהם לפני שאני הופך לטום הנקס ועושים עליי סרט.</p><p>נכון לעת כתיבת שורות אלו כבר קניתי כרטיס חדש, חילצתי משתי החברות אישורים רשמיים לכך שהחברה השנייה אחראית על שינוי השם שלי בכרטיס (כדי שיהיה לי לנסות איך לתבוע פיצוי כשאחזור לארץ), הספקתי לנמנם מעט לצד האנשים שבתמונה השלישית מהסוף, לאכול במסעדות הלא-יקרות-באופן-מפתיע שיש בשדה התעופה, להתיידד עם עוברי אורח, ולמצוא ספר שהלוואי והיה לי אותו לפני שטסתי ליפן.</p><p>נתראה בהוואי ✈️</p>`,
              id: 38
            },
            {
              date: 'December 2, 2024',
              degrees: '15°',
              name: 'JAPAN SUMMARY 🏯🎌🍣',
              shortName: 'Japan Summary',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/6150B808-DB0B-4798-91CD-DCE33769BBB3_ACBCDDEF-E8B6-4416-B224-5E28239C4397.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/13B5F6E7-209B-47E1-8B82-42557455B649_15F44B3B-98B1-4C69-BDCF-76AD4DF891C8.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5B49A9C3-F7CA-432A-9128-F2D5723C0E00_1CDE89FD-275C-4231-97C3-AC06E1AEC960.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/84F90569-6162-49B0-94FB-6EBD873BC00E_BE59CC8E-4C79-41FC-9145-306942AA4DA8.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9B13C519-DDDA-4DCB-8EF5-73B8EC78C250_16288D8E-4486-4A16-856E-1ECC9AF8D0FF.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/6150B808-DB0B-4798-91CD-DCE33769BBB3_ACBCDDEF-E8B6-4416-B224-5E28239C4397.jpg',
              description: `<p>בואו נעשה סיכום קטן לשליש הראשון של הטיול שלי.</p><p>שלושה דברים שאהבתי ביפן:</p><ol>  <li>הנימוס / עדינות / אדיבות שלהם.</li>  <li>הדרך שלהם להתגבר על ביישנות באמצעות מוחצנות יתר (שגם היא מהולה בביישנות וזה מקסים בעיניי).</li>  <li>האסלות שלהם.</li></ol><p>שלושה דברים שלא אהבתי:</p><ol>  <li>הסירחון ברחובות (פיח ועשן סיגריות).</li>  <li>הקטע הזה שאתה שואל שאלת כן/לא והם עונים okay כשהם לא מבינים בכלל מה שאלת כי הם לא יכולים להגיד שהם לא מבינים בכלל מה שאלת.</li>  <li>השימוש המוגזם שלהם בפלסטיק.</li></ol><p>הופתעתי לטובה מ: היעילות של התחבורה הציבורית, ובפרט ההתממשקות שלה עם אפליקציות המפות של אפל ושל גוגל (החל מעדכוני בעיכובים בזמן אמת ועד להמלצה על איזה קרון לעלות כדי שארד כמה שיותר קרוב ליציאה בתחנת היעד שלי).</p><p>הופתעתי לרעה מ: הקליטה שלהם דרדל׳ה, גם בוויפיי וגם בחבילות הגלישה שקניתי. אבל זה סליח; ישראל ידועה בתור מדינה שמכורה לאינטרנט, ואיכות הקליטה אצלנו בהתאם (כדי לעזור לנו להתמכר יותר).</p><p>למה הייתי יכול לחיות ביפן: אני חושב שתפורה עליי הדמות של הזר שהיגר ליפן והתערה עם המקומיים, ואמנם הוא לא מקומי לחלוטין אבל הוא חלק אינטגרלי ובלתי נפרד מהקהילה, ובפרט מההומור והתרבות של הקהילה.</p><p>למה לא הייתי יכול לחיות ביפן: אני גבוה מדי. ברצינות. אם הייתי מקבל שקל על כל פעם שדפקתי פה את הראש במשהו, הייתי יכול כבר לקנות לעצמי איזה ראמן וואגיו קטן. בהתאם כמובן גם הכיורים נמוכים ולשטוף כלים פה נשמע כמו סיוט עבור הגב שלי.</p><p>יאללה.</p><p>———</p><p>לאחר ששהיתי קצת מעל 24 שעות בנמל התעופה שלהם והכרתי שם אנשים חביבים ממש שדיברנו שעות, המראתי לכיוון הוואי 🌺🌺. בטיסה שאורכה 7 שעות הספקתי לחזור בזמן 19 שעות, כלומר יצאתי מטוקיו ב-21:00 ונחתתי ב-09:00… של אותו יום. אז היה לי 2.12 כפול השנה 😆</p><p>ביציאה משדה התעופה חיכו לי אחותי ושני ילדיה שאני מאוד אוהב ומתגעגע ולא ראיתי אותם חצי שנה. לאחר שהסיעה אותנו למלון שלי, הנחתי את חפציי והלכנו כולנו לחוף הים שנמצא ממש 3 דקות הליכה מהמלון. מזג האוויר היה מושלם, השמש חמה והמים נעימים.</p><p>אחרי הים הלכנו להמבורגריה מקומית, ומשם נפרדנו - אבל לא לאורך זמן, כי אנחנו הולכים להיפגש שוב ממש מחר ב-11:00 בבוקר (שהוא 23:00 בשעון ישראל) לטייל ביחד באי הטרופי הנפלא הזה 🥳🥳🚶🚶‍♀️✨✨</p>`,
              id: 39
            }
          ]
        }
      ]
    },
    {
      name: 'America',
      bgImage: usflag,
      countries: [
        {
          name: 'Hawaii',
          bgImage: hiflag,
          steps: [
            {
              date: 'December 3, 2024',
              degrees: '29°',
              name: 'Diamond Head Volcanic Peak',
              shortName: 'Diamond Head',
              media: [
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/ED8AE979-35E3-4B53-8E72-63CDA6ED7AA1_AE51ACF6-B835-4C58-BD1B-3360309B8CBA.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/6b4e03e9-dec6-4a69-b3dd-27ffdb86a535_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8CC8EDE9-3A4A-4A9C-B76D-E90BC0F533D6_98FA4725-ED65-4BD3-8900-EF873DAC7B3D.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/c80069e4-6580-447b-9c4d-be1faf1829e2_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1FF5C4D9-C477-49CB-B56E-F85BAA558BE8_D59542E2-C536-4B24-8085-7805E2399FCF.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D16977CC-56A1-408A-8156-78DEA4278168_4A826E60-052C-4302-A4B4-54DA36B5B242.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/fb48c993-8c7a-4054-9712-d2abb8ccfcb3_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/573E2F44-4464-4891-8E08-C7718F17C248_4A1AF4FF-6F88-456C-8046-1B277252D243.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/84774715-619B-42FC-BD54-DC8CAA62AC74_2310DDDC-1E06-4921-B0AD-5AC7E4AF4BB8.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/24B9B9A6-5BF3-4B99-A5FF-912234B3732B_4131AD41-902B-481A-A657-416EFF7EC541.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/EAC10D12-7803-4EDF-8EA0-CC9610FEF391_F7222D42-D8E0-46C2-94C8-80F6E6F3C3E8.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3230C75C-AB02-47FE-BE22-1F0A6C4A47C3_BDF26475-BBFE-4439-BA2A-8E9D65BD1970.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B990F440-480D-4736-8D56-5E4A5115F2D8_EA8E46CE-2AE7-4B2E-86BD-722EA80186BB.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/84017889-AF4F-4DAB-9A50-DE27B59BD7FF_0ED4DC4C-2E7A-4C74-9BA6-034A790C3EF6.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/84c17b62-4aa7-441a-b4aa-ecb663c04429_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/F1F2B2EA-B3DB-4C4D-AFB1-0BC79AADA6BC_681EAEAB-A507-4130-9731-4AA30E72903F.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/6B1A2CCD-6AB8-4D17-AD50-156A272B7422_EA904813-8342-4BA4-86AC-9E233B02A880.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/A8238576-C731-4132-9824-3AA7439EA790_2FD59691-256A-4DD4-8322-DF3FC645123B.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/BB3FD997-F067-4691-8900-6EE1F8CAC7F5_7A02402B-39F5-484B-BFE6-FD8834252CEE.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/30db192b-16eb-4c6e-a425-98fbf0b9b759_video'
                }
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/573E2F44-4464-4891-8E08-C7718F17C248_4A1AF4FF-6F88-456C-8046-1B277252D243.jpg',
              description: `<p>בוקר. צחצוח שיניים. קפה. ארוחת בוקר עם החבר׳ה בהוסטל. לא שאני שותה קפה או אוכל ארוחת בוקר, אבל זה יפה להתחיל ככה פוסט, לא?</p><p>בדיוק בשעה 10:54 בערך מיכל באה עם הילדים ואספו אותי לאתר הטבע הראשון שלי בהוואי (שזו גם פעם ראשונה של מיכל באתר הזה): מכתש ״ראש-יהלום״ שהוא בעצם פתחו של הר געש רדום.</p><p>לילדים לקח קצת זמן להפשיר ולקבל את הנוכחות שלי, אבל גם זה קרה בסוף (קצת שוחד של תותים לא מזיק). בצהריים נפרדנו, הוחזרתי להוסטל שלי ומיכל והילדים חזרו לביתם; משם המשכתי לחוף הנפלא שליד ההוסטל, הסתובבתי עם קצת צעירים שהכרתי במקום, וצילמתי את השקיעה היפהפייה (אתם יודעים איך זה, השמש פה זו פשוט לא אותה שמש בישראל).</p><p>בערב התרחצתי, התלבשתי יפה ויצאתי להסתובב בטיילת באזור שאני נמצא בו. האווירה ממש נחמדה, יש חנויות מאוד מגוונות, מלא לפידים ברחובות נותנים אווירה קצת… אקזוטית?</p><p>באיזשהו שלב התיישבתי בבר קצת ״פנסי שמענסי״ שבו נמכרים קוקטיילים לצד מוזיקה ג׳אז חיה (מישהו מזהה את השיר, אגב?), ונשארתי שם עד שהגיע הזמן ללכת לישון.</p>`,
              id: 40
            },
            {
              date: 'December 4, 2024',
              degrees: '30°',
              name: 'Moanalua Park',
              shortName: 'Moanalua Park',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7FEB619C-E2E1-4018-BC07-A188E20B5506_C50E013F-A4C8-4C20-B798-230095BFD584.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4A7D66FE-2D06-4D43-AF39-DC03D218D26A_FFBD1FF4-7403-44B5-9A4B-F1891E36C37A.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C4EC8938-3B01-4C84-96C4-8CEE8C2021A7_EA080D97-E6DA-44F5-A9CB-172210F87173.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C7C02F71-47EA-4B8F-A0AE-51FB5B7C82C0_67FD5B11-E763-4E88-A96C-5FA0BAE4FDB9.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D12F98C9-6866-4B17-839A-A2386100696D_2005177A-C5C9-4BFC-A33D-FB3FA1729FC9.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B93C96B3-DFF9-49CD-A943-7A037A3760D7_AAC65F4F-2386-4C8E-9B74-9B889A537A09.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D7CB9EAF-A6E8-4C1D-920C-83B7A31A0540_E5381D1F-1506-4FBE-B56E-DDA0705986A8.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7FEB619C-E2E1-4018-BC07-A188E20B5506_C50E013F-A4C8-4C20-B798-230095BFD584.jpg',
              description: `<p>היום הלכנו לפארק טבע מקומי בשם מואנלואה. מדובר במספר דונמים של מרחבים פתוחים ממש באמצע העיר; כלומר, ניתן לשמוע את המכוניות מסביב… אבל כל שהעיניים רואות הוא מרבדים של שטח פתוח ירוק, מגונדרים בעצי היטאצ׳י ענקיים (זה לפחות השם היפני שלהם), אשר מכסים שטחים גדולים בצל, ובכך מאפשרים לילדים מקום משחק נפלא ובטוח מהשמש (וענפים ענקיים לטפס עליהם).</p><p>בערב הלכתי שוב לחוף הים, ואחריו התלבשתי יפה, התארגנתי ויצאתי שוב לעיר, הפעם למקום שתכננתי מראש ללכת אליו: בר ג׳אמים מקומי. הלכתי ברגל 2.5 ק״מ בשביל שמישהי צעירה ממני תגיד לי ״אין כניסה בלי תז״ כאילו אפשר לחשוב בכלל שאני מתחת לגיל שמונ- אההה… עשרים ואחת. ניחא. אז הסתובבתי חזרה לכיוון המלון רק כדי להסתובב שוב אחרי דקה בחזרה ולהגיד ״אה רגע, שכחתי שיש עליי דרכון״ (כבר אמרנו שאני ילד מעופף?).</p><p>הג׳אם היה מוצלח כמובן, אמנם אין תמונות או סרטונים אבל אני כהרגלי ניגנתי דברים מוצלחים עם אנשים מגניבים, הכרתי שם חבר׳ה צעירים מקומיים (זה בר של מקומיים יותר מאשר תיירים), שיתפנו סיפורים על הא ועל דה (אני על הטיול והם על החיים בהוואי), וישבנו עד השעות הבינוניות של הלילה לפני שהלכתי חזרה למלון וניצלתי את ההליכה הארוכה כדי להתקשר לאמא שלי ולהגיד לה מזל טוב ושאני אוהב אותה. מזל טוב אמא, אני אוהב אותך!!</p><p>בתמונות: ישבתי לקרוא את ספר החוקים על החיים והיה רשום באופן מפורש שלפי כל הכללים אני עכשיו דודה שרופה ולכן עליי למלא צעד שלם בפולארסטפס בתמונות של האחיינים שלי.</p>`,
              id: 41
            },
            {
              date: 'December 5, 2024',
              degrees: '30°',
              name: 'Kaneohe',
              shortName: 'Kaneohe',
              media: [
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1EDD8CBE-DE2D-4EF7-BA17-6AA664142260_4164170D-C5E7-4C01-8A2E-4FB9086B2664.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/f62ec699-67fc-4647-97ea-e1e805b07c11_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/190FDDA7-D677-417F-8C5F-617F7F0166DD_32DCCC51-7B7F-410D-8322-C7FF51AD8805.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/5d538483-41b7-45f7-abf2-48c39fd41088_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9A915A3F-D046-4569-BB2D-0FD1113FA722_D5516B84-2B6B-4E42-BA78-6DC4378D6334.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9A915A3F-D046-4569-BB2D-0FD1113FA722_D5516B84-2B6B-4E42-BA78-6DC4378D6334.jpg',
              description: `<p>הלילה היה האחרון שלי במלון הנוכחי. בבוקר מיכל אספה אותי, הפעם ללא הילדים; מהמלון המשכנו לקוסטקו, סופר ענק יותר מכל סופר שקיים היום בארץ, ומשם לעיר קנאוהה - שם אלון בלילות הקרובים ביחד עם מיכל, ברק, הילדים אורן ואמיליה, ההורים של ברק שחר והיידי, והכלבים החברותיים אנג׳ל ושמעון. כשאני אומר ״ביחד״ אני כמובן לא מתכוון כולנו באותו חדר; הכלבים ישנים בקומה למטה.</p><p>לאחר קבלת הפנים וההתמקמות בבית החדש, הלכנו כולנו ביחד לשוק אוכל (זה מה שזה היה? בדיעבד, אני לא באמת יודע מה זה היה… אני רק יודע שזה בחוץ ושהיו דוכנים של אוכל). היה בחור שעשה מוזיקה נחמדה ברקע עם כל מיני כלים שונים, כולם דיגיטליים למעט טרומבון ששכב בפינה… אז כמובן שהייתי חייב לחכות שיוציא את הטרומבון כדי לצלם סרטון ולגלות שהוא השתמש בו כדי להפיק שני צלילים בדיוק. הא. לפחות הוא עשה מוזיקה נעימה לעוברים ושבים :)</p><p>בערב הגיע צעד ההפשרה הבא של אורן ואמיליה בנוגע לנוכחות שלי: שיחקנו ביחד ב… אני לא בטוח בדיוק מה. אני רק יודע שאני הייתי המפלצת, הם היו גיבורי העל (הענק הירוק וספיידרמן ליתר דיוק), אני זרקתי עליהם כריות והם ניסו to break me into pieces. זכרונות יקרים מפז.</p>`,
              id: 42
            },
            {
              date: 'December 6, 2024',
              degrees: '27°',
              name: 'Kaneohe #2',
              shortName: 'Kaneohe',
              media: [
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D9A8E04D-82D3-429F-A6EB-81870C3D0C81_B8B728BD-8EA4-4554-A9C6-E1EDEE2D1AB9.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/8072c9e7-3747-4452-b4e2-00c0c19d0ca0_video'
                }
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D9A8E04D-82D3-429F-A6EB-81870C3D0C81_B8B728BD-8EA4-4554-A9C6-E1EDEE2D1AB9.jpg',
              description: `<p>היום היה יום של מנוחה; ישבנו בבית, שיחקתי עם הילדים, שוחחתי עם היידי, שיחקתי עוד עם הילדים, ובערב עשינו קבלת שבת כנהוג בהוואי בימי שישי בערב. אחד הדברים שהיה מגניב אם הייתי מספיק לצלם זה את היידי - בת הבית היחידה שאינה דוברת עברית - מברכת בעברית.</p>`,
              id: 43
            },
            {
              date: 'December 7, 2024',
              degrees: '28°',
              name: 'Aloha Stadium Swap Meet',
              shortName: 'Aloha Stadium',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/FDAABB16-3AD0-497C-A797-5A5A444DFF16_02E37CFC-8076-477C-94C6-8F1E13C7B417.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/164DAA59-0684-4FC0-ACDD-14C38C1AE38C_F4391AD2-7BA3-4493-B513-C6F662A61AA0.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/597F8B23-D4E2-4ECA-A766-B3C31BDAC52D_5CDDD926-28BF-4E29-BF6F-5C8B76914A83.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/27F38E47-6AC9-4C1A-8BDB-2BDE3387203A_9D72C1BF-E25A-4FEF-9819-C5845E50BEBA.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/89EA2469-6B00-477C-9632-A54B70A2C7A8_EE65F8DA-FF79-4501-90B3-C4EE1DF89755.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/82C7110A-C988-4360-AC1D-5C0A16C033DF_0305EB62-9BC2-43AD-906A-9E9ACEA20D9A.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7EC9045B-0C7E-407B-B5B7-B98ED43EE274_B60725E3-B850-414D-B328-FBEE68AD3EB7.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D60335BF-DFC7-46B3-ACAF-B21AAC13572C_B369D7EA-6E0A-4349-BCF0-41EC4FDAFAC1.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/c8535a35-1c18-4599-ac74-a61485169de0_video'
                }
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/164DAA59-0684-4FC0-ACDD-14C38C1AE38C_F4391AD2-7BA3-4493-B513-C6F662A61AA0.jpg',
              description: `<p>אז עם מיכל והילדים ביליתי כבר כמה ימים, ורציתי לשם שינוי יום כיף עם ברק שעובד 7 ימים בשבוע כדי לפרנס את המשפחה… אז כמובן שהצטרפתי אליו ליום כיף בעבודה ^^</p><p>יצאנו מהבית ב-5 בבוקר, נסענו למחסן הציוד של ברק, העמסנו עגלה בציוד ובנעליים של Allways Barefoot (אהמפרסומתסמויה), הלכנו לשוק הפשפשים שבו ברק מעמיד את הדוכן, העמדנו את הדוכן, מיקמנו את הנעליים, ואז ברק מכר נעליים ואני הלכתי להסתובב בשוק כי מה אני מבין במכירת נעליים.</p><p>החוויה הייתה מאוד נחמדה, הרגשתי קצת כמו עובד זר כי… ובכן, כי עבדתי. והייתי זר. או ליתר דיוק בחור מוזר עם חולצת פיקאצ׳ו וכובע מסובב על הראש (שגם הוא מסובב אז ביחד זה מתאפס) שמקבל מברק פקודות בשפה שהמקומיים לא מבינים. היה כיף בקיצור. אפילו קיבלתי נעליים חדשות כאות הוקרה 😍🥾</p><p>בסרטון האחרון: יוני מחבל לברק בעסק.</p>`,
              id: 44
            },
            {
              date: 'December 8, 2024',
              degrees: '29°',
              name: 'Kaneohe #3',
              shortName: 'Kaneohe',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D32E99CD-E229-4B80-A8A4-FE6D7C6DA289_BB07A759-D8F5-47CB-ABCC-416B8015D3BA.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5E3DD912-75FB-492E-8E2E-55BF21345651_A2C4D188-5FA0-40CB-B858-09C364326FE5.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/A07698BB-1FB6-4771-924D-49AA6CB789EB_AAA2D8B6-8A96-4C85-8ECE-17650801B346.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CC564D16-7E9A-495D-88DE-72D16044089D_E8EA1DF4-9C37-4FC0-A9BA-71565CAD35D5.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/BF88BEBE-C674-4F99-8C7D-5C00528AB23C_DF5AC4F3-1386-45F7-B662-19BBDB55A50A.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4CE8067E-89EC-4DA7-9FCD-FC11D4A2E9E5_1C92A11F-6FEF-4144-9850-9220B9ED7465.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/A31EA8A5-588F-4113-8347-A8DDBA1748D5_BFFB43E7-5DE1-4040-AB6A-135220C1DF0E.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/4b26c0e3-7eb0-42dc-ba65-ca657bcf2498_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/AA4073D3-AD5C-4562-8FEC-3C6649B74F4E_1CBE0627-7350-4E8E-8F26-1C3978D6270E.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B3D4B5C7-E337-4130-AD27-7970BA18DEA0_7B4163CA-7615-45E5-9C49-3FCAABF96868.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/9f18c87d-e905-4f9b-b5b8-3b2ea354d8db_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/667F98A5-6794-42E9-BAB3-87A8CEC5A891_A5B2DDA9-A5AD-4707-A90E-B4C997AEA7D9.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/3e49fa7a-b649-45c5-9ca5-66d2f65bd53e_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2DB1AB09-1DA4-4BD1-8377-1861F39AE812_1CCDA31A-6700-46A8-AE01-4B5FB703D23A.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/EA83AA8F-AE53-4282-8B50-25ABC50802B9_0B96D220-1A65-42FB-B04D-DA7CE3A971F6.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/A07698BB-1FB6-4771-924D-49AA6CB789EB_AAA2D8B6-8A96-4C85-8ECE-17650801B346.jpg',
              description: `<p>היום בבוקר רציתי לראות את הזריחה מכיוון שאני לא רגיל אליו, אז יצאתי ב-6 בבוקר והתחלתי ללכת על חוף הים הקרוב ביותר לבית. הזריחה הייתה מכיוון הגבעות שרואים בתמונה השנייה, כלומר במאונך לקו החוף.</p><p>בצהריים חזרתי הביתה ומיכל לקחה אותי ואת הילדים לגנים בהאיים בהם היה ניתן לראות צמחים מעניינים ולהאכיל דגים וציפורים. באחת התמונות שהעליתי רואים צמח ירוק שהקישוטים עליו עשויים להעלות חשד כי מדובר בצמח פלסטיק; אך מדובר בצמח אמיתי עם טקסטורה תלת-מימדית של קישוטים בצורת טיפות מים.</p><p>בערב הלכנו (כל המשפחה) למסעדה מקומית לחגוג את הערב האחרון שלי איתם לטיול הנוכחי. בתמונה הלפני אחרונה: תמונה שהייתה תלויה במסעדה ובה ילד שבכלל לא מכריחים אותו להצטלם עם הטרומבון שלו.</p>`,
              id: 45
            }
          ]
        },
        {
          name: 'Los Angeles',
          bgImage: laflag,
          steps: [
            {
              date: 'December 9, 2024',
              degrees: '29°',
              name: 'Los Angeles 🎸',
              shortName: 'Los Angeles',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2B1DECC4-10D3-4DAB-B01A-FFAEE040D415_F825E0E7-E124-4027-B1A6-269F1F07849B.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3F8F771D-6D0B-482F-8F10-375F7BB94F9C_2259B041-C077-438D-8173-A2594F7B8FE0.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1BB5EC11-68C5-4A33-BEC5-1179ED46D8F6_1F3D5273-8B07-4AE2-BFC8-298458FE1EAF.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5870D8ED-53C9-4E96-9E0B-70ECBDC5D585_AD0A6A5B-0ACE-49D1-B4B6-190E3BC956A2.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/f42fee6b-2382-4968-8dbb-775af9234538_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/BA01CE6B-3AD4-4C67-BA61-E1ED2FC01A3F_8883109C-A317-47C6-9C07-B084B89213A9.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0A017343-8E58-44FE-B0D1-5DC38FEE9C7B_DFDA757A-B082-42F1-A4AA-56E03E1D342D.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/fad48f10-3093-43b4-ac6b-76d737da6261_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B3931965-48C8-4636-96ED-C7875F0DC6B9_D5166FCA-3527-41CF-983D-8BB2B3DE193A.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1BB5EC11-68C5-4A33-BEC5-1179ED46D8F6_1F3D5273-8B07-4AE2-BFC8-298458FE1EAF.jpg',
              description: `<p>בתמונה הראשונה: בדיחה שמתארת את היחס שלי לטיסות בטיול הנוכחי. מה הפעם? טוב ששאלתם. בד״כ כשאני מזמין טיסה, התאריך והשעה הרשומים הם ביחס לתחנת המוצא שלי. אך לא הפעם; אני התכוננתי לטיסה שיוצאת ב-07:35 בבוקר… כאשר בפועל זה היה 07:35 זמן UTC, כלומר הטיסה יצאה עוד כשישבתי במסעדה עם המשפחה.</p><p>ניחא.</p><p>שמתי לב לזה לפני שהלכתי לישון, אז הספקתי לקנות מעכשיו לעכשיו טיסה שיוצאת ב-08:00, חצי שעה מהזמן שבו התכוונתי לצאת במקור. הפעם בשעון הוואי. יאללה. לפחות הפעם לא עשו לי צרות בנמל התעופה עצמו… איפכא מסתברא; הגברת ששקלה לי את המזוודה אמרה לי ״יש לך משקל יתר של פאונד אחד… טוב יאללה עבור, אין דבר״. שום סיכוי שזה היה קורה ביפן ><.</p><p>מעתה בעצם כל טיסה שלי לוקחת אותי קדימה בזמן (בניגוד לטיסות עד הוואי שלקחו אותי אחורה בזמן), כלומר יצאתי בבוקר ותוך 5 שעות והגעתי אחה״צ ללוס אנג׳לס.</p><p>———</p><p>אז… לוס אנג׳לס!!</p><p>בתמונה השנייה: הדבר הראשון שראיתי ביציאה מנמל התעופה, מה שגרם לי להבין שאני נמצא במקום הנכון (אגב יש פה מלאנתלפים פוסטרים שלו!! כנראה שסוניק באמת יותר פופולרי בארה״ב מאשר ביפן).</p><p>בתמונה השלישית: כמה אני אוהב טכנולוגיה. ב-3 הדקות שבהן חיכיתי לאוטובוס הספקתי לשאול איך נהוג לשלם על אוטובוסים בקליפורניה, לגלות על ה-״רב קו״ שלהם, להוריד כרטיס וירטואלי שכזה לטלפון שלי, לטעון אותו בכסף, ולצלם את השקיעה רגע לפני שהאוטובוס הגיע.</p><p>בסרטון ובתמונה שאחריו: חוף ונציה (Venice Beach) שבו אני הולך ללון ב-3 הלילות הקרובים. החוף מלא באומנות מכל מיני סוגים, בין אם מוזיקה חיה, גרפיטי, ברייקדאנס ועוד. באופן כללי אני מקבל פה תחושה כי החוף הזה מהווה את המהות של אמריקה כמו שהייתה במקור - ארץ ההזדמנויות. אני רואה פה אנשים מכל העולם, הרבה מהם הגיעו במטרה להתחיל חיים חדשים… ״משנה מקום משנה מזל״ שכזה, והיעד הוא תמיד LA. דיברתי עם הומלס צעיר אחד, אמר שברח מהבית כי אמא שלו נפטרה מסרטן ואין לו אבא אז הוא בא להתחיל חיים חדשים ב-LA; כשהוא יהיה גדול הוא רוצה להיות שוטר ולעזור לאנשים כמו שאנשים עזרו לו כשהוא היה במצוקה.</p><p>איחלתי לשוטר בהצלחה. (וחלקתי איתו פיצה).</p><p>בסרטון האחרון: חנות שנמצאת ממש מתחת למלון שאני נמצא בו. תקשיבו למוזיקה שיוצאת ממנה.</p><p>בתמונה האחרונה: הלכתי להסתובב קצת בחוף וראיתי חבר׳ה שעושים גרפיטי… אז הצטרפתי אליהם ודיברתי איתם. מבחינה אומנותית הציור הזה מאוד יפה, אז עניין אותי למה הם משקיעים כל כך הרבה זמן, כסף ומאמץ כדי לצייר אותו. אמרו שזה כדי לשמח את הילדים. חמוד, לא?</p>`,
              id: 46
            },
            {
              date: 'December 10, 2024',
              degrees: '22°',
              name: 'Venice Beach',
              shortName: 'Venice Beach',
              media: [
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/66594189-E4CF-45D1-9740-3A64A9704EC0_E5DD67CD-DF80-4AB9-870E-5C570747CCF0.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/e4a3fa28-b671-42c4-a045-b6d6f04eb9ec_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/592DF16E-5F78-4150-A4EB-5226081BF97A_847B463B-F26E-48D8-907D-CDF1528CADF9.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5A0D2AD7-7CCC-4DA6-B1EE-5910F995A72D_E2E2CC53-4996-4D3D-A2E7-0945E50DA0D1.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/86F1DBC0-E6B4-4DF7-A6ED-FE5279A7F020_057B159F-91F3-41BE-A0CD-DCDCA6F9FD69.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1912D0D7-FD47-40F7-9809-27FF2BEF1B57_AD544D61-1759-4A28-947A-D387A318BCFC.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C6F9F33F-FCD4-4526-AFFE-0B096606106D_EB85044B-948F-4930-94CA-4E516441CEAE.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1912D0D7-FD47-40F7-9809-27FF2BEF1B57_AD544D61-1759-4A28-947A-D387A318BCFC.jpg',
              description: `<p>את הלילה העברתי לבד בחדר של ארבעה, ובבוקר הגיעה ג׳וזי, השותפה לחדר שלי ליומיים הקרובים… אז יצאנו לאכול ביחד צהריים. סמאש-בורגר ליתר דיוק; סגנון המבורגר אמריקאי טיפוסי.</p><p>המסעדה הייתה על הטיילת של חוף ונציה, ומחוצה לו היה נגן גיטרה שהנעים את זמננו (בסרטון הראשון). לאחר מכן המשכנו לטיילת ביחד על החוף, לנשנש מה שמצאנו פה ושם, ואז ג׳וזי הצטרפה לחבר׳ה אחרים ואני המשכתי לסקור את האזור בעצמי. אכלתי ארוחת ערב קלאסית במסעדה שהגישה את הקינוח הכי טוב שטעמתי מעודי… או לפחות ככה זה היה אמור להיות; בפועל זה היה כל כך מפוצץ סוכר שלא הצלחתי לסיים אותו אפילו 🫠 (לזכותם ייאמר שהקינוח טעים בדיוק כמו שהוא נראה).</p><p>בתמונה האחרונה: למי שלא מכיר, פרצה אתמול שריפה ביערות מאליבו, כ-20 ק״מ מהאזור שאני נמצא בו בלוס אנג׳לס. השריפה כל כך גדולה שניתן לראות אותה בבירור גם מכאן, והיא ממלאת את האוויר בפיח שגורם לאנשים להתסגר בתוך בתיהם.</p><p>ועכשיו חידה: כמה דמויות זיהיתם בתמונה השלישית מהסוף?</p><p>(אני זיהיתי 5 בטוחים, ואני חושב שאני מזהה עוד 3).</p>`,
              id: 47
            },
            {
              date: 'December 11, 2024',
              degrees: '22°',
              name: 'Hollywood',
              shortName: 'Hollywood',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9EFDF4A5-05A6-431E-AA7D-5D5976EE4869_916AA69B-ED92-4E14-BC5A-7A269E74A48F.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8AC27F27-5600-42EE-BC9C-B4929ABB0FA6_F6A977BD-55F5-456F-9DF9-43A435748B02.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/2d024424-4fe6-43a2-8e96-59760ae697d8_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3FBA71DC-3311-45C8-B637-ED39115D91A5_E8D434C9-28E1-4527-ACC6-BF529A4A855F.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/A90E9CB6-38E9-4809-BECA-8019D595A3AB_8CAF1AB7-EAEF-4DE9-B8B5-182F60ECD25B.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5A1A22E8-C012-4E83-8092-1B8FDF02F789_B8496733-80D3-4E7B-9D88-7BC00C1C6184.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/6b16fc59-7828-4fdb-8498-60fc780e9d3f_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3063E640-E05F-4A25-AA5D-E38CF955E302_77ECB1F7-D478-41D5-AABE-1D8EB3216626.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CCA70609-FA9F-4042-A856-572C4FCBCEA0_8D1ADB43-CE52-4DAF-9AC1-20F5480CC2E3.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9FAF263F-20E0-49C0-BB4F-E6AA63647070_73358F86-6527-4807-AC00-39D2D9C25004.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/BB0501B8-52FB-405A-AC90-96AE98167F3F_F25B17F8-5438-4BE2-99A1-F8119B24C982.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/BEF623A6-EE71-4425-A557-7366DE46F12F_8B4C0B23-A3EE-408C-9001-1580ED46E8C0.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B24D6BA4-70B1-46C7-A630-E7CA67C4FB86_259A7AB2-B3BD-4754-A5E5-04C445303CE6.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/A9F15590-C440-4A95-BDA1-CFD10C1284CC_C0754765-D009-4676-8599-66E9909DA983.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3063E640-E05F-4A25-AA5D-E38CF955E302_77ECB1F7-D478-41D5-AABE-1D8EB3216626.jpg',
              description: `<p>מי אני? יוני.</p><p>ומי הלהקה האהובה עליי? רד הוט צ׳ילי פפרס.</p><p>ומאיפה הלהקה הזו הגיעה? לוס אנג׳לס.</p><p>אז כמובן שהייתי חייב להקדיש יום אחד מהטיול ליעדים שקשורים בלהקה. התחלתי בבית הספר Fairfax שבו הם למדו (ומאחוריו הסנאים שצילמתי בסרטון הראשון) ועליו הם שרו בחלק משיריהם.</p><p>משם המשכתי ליעד הבא שלי, הר סיני (תיכף אסביר), אך ממש במקרהההה בדרך עברתי בשדרת הכוכבים של הוליווד (נשבע שבמקרה) אז הייתי חייב להצטלם עם הכוכב של רד הוט.</p><p>אה, כן… הר סיני? זה השם של בית העלמין היהודי שבצפון לוס אנג׳לס. ולמה הלכתי לבית עלמין יהודי? כדי לבקר את הקבר של הלל סלובק, הגיטריסט הראשון של הלהקה, הבנאדם שייסד אותה והתחיל את אחת ההשפעות התרבותיות הכי כבדות שלי, ו… הבנאדם הזה מת צעיר בגיל 26 ממנת יתר של סמים :(</p><p>אכתוב עוד קצת על כך בצעד הבא שלי בפולארסטפס.</p><p>בתמונה השלישית מהסוף: חשבון חשמל שיעלה לאבא שלי קצת את לחץ הדם.</p><p>בתמונה השנייה מהסוף: לא ידעתי שיש דברים כאלו באמריקה 😮</p><p>בתמונה האחרונה: ככה אני רואה דרך המשקפיים שלי שקניתי בדיוק לפני חודשיים. המחיר שלהן היה נמוך יותר מכל דבר אחר שראיתי… ומסתבר שהאיכות בהתאם 😓 (וכן, זה אחרי שניקיתי אותן היטב עם נוזל ייעודי).</p><p>אגב, את כל המסע היום עשיתי על אופניים, יצאתי ב-10 בבוקר וחזרתי למלון ב-8 בערב. 81 ק״מ סה״כ. בעשרת הקילומטרים האחרונים הברכיים שלי כבר הכריזו באופן חד משמעי שהן לא מרשות לי לרכב יותר, אז רכבתי והלכתי לסירוגין את הדרך הזו. כל המסע הזה רק גרם לי להעריך יותר את אבא שלי שבגיל 57 (+-) רכב איתי עד ליקנעם וחזרה ביום כיפור… אין לי מושג איך הברכיים שלך עמדו בזה בזמנו אבויה, אבל אני מצדיע להן. ולך 🫡❤️.</p>`,
              id: 48
            },
            {
              date: 'December 11, 2024',
              degrees: '22°',
              name: 'My Heart #2',
              shortName: 'My Heart',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3FFBDB8F-9B04-46DF-BE18-AA3835A245E5_5C2C3DBE-CE18-4712-A160-7117278D89C8.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CCA70609-FA9F-4042-A856-572C4FCBCEA0_8D1ADB43-CE52-4DAF-9AC1-20F5480CC2E3.jpg',
              description: `<p>אני רוצה לשתף שוב מתוך ליבי, הפעם אולי באופן מעט פחות קודר (קצת אירוני בהתחשב שהעליתי תמונה של קבר, לא כך?).</p><p>אז… בצעד הקודם סיפרתי על הלהקה האהובה עליי, ועל הביקור שלי בקבר של הגיטריסט הראשון שלה. עתה אנסה לענות על השאלה - למה? למה אני כל כך אוהב אותם? למה הם כה משמעותיים עבורי? ומה המשמעות של ללכת לקבר אם אני בכלל לא מאמין בנשמות או באלוהים כזה או אחר?</p><p>ובכן… אני לא באמת יודע למה אני כל כך אוהב אותם. הם לא אלילים בשבילי - הם עשו הרבה שטויות בחייהם, המוזיקה שלהם היא לא הכי מוצלחת שיש, ואין סיבה ממשית שאוהב אותם על פני כל להקה אחרת. אני מניח שהתשובה הפשוטה היא - שאני אוהב אותם כי זו הלהקה הראשונה שהכרתי. אני אוהב אותם כי אחי ואחותי אהבו אותם, וכשהייתי קטן רציתי להיות מגניב כמו אחי ואחותי, אז אהבתי אותם גם. וכן, אני אוהב אותם גם בזכות המוזיקה - על אף שהיא לא הכי מוצלחת שיש, יש בה מאפיינים שאני לא מוצא אצל להקות אחרות.</p><p>למה הם כל כך משמעותיים עבורי? זה לא משהו קוסמי או גורלי, זה פשוט ש… המוזיקה של להקה הזאת ליוותה אותי כל החיים; אני אמנם לא מאמין במשמעות קוסמית ליקום, אבל אני כן מאמין שהשקעה נרחבת של זמן (הווה אומר, שנים על גבי שנים) בגורם כלשהו יכולה ליצור משמעות אישית ביני לבין הגורם הזה. ה-״גורם״ יכול להיות להקה שאני מקשיב לה שנים ולכן הופכת למשמעותית עבורי, קשר חברי או רומנטי שאני משקיע בו שנים ומההשקעה הזו נובעת המשמעות של אותו קשר… וכו׳ וכו׳. במילים אחרות, אני מקשיב להם כבר מעל 20 שנה - לא יהיו משמעותיים עבורי?</p><p>אז למה לי לעלות לקבר? ובכן… כמו שכתבתי בפסקה הקודמת, יש ללהקה הזו משמעות עבורי; הם היוו עבורי השפעה תרבותית יותר מכל דבר אחר (טוב, אולי חוץ מקיפוד כחול אחד). הקשבה של שנים על גבי שנים למוזיקה שלהם עיצבה ושייפה את הסגנון המוזיקלי שלי; היא הייתה גורם מרכזי להחלטה שלי ללמוד לנגן על גיטרה ועל בס, היא חיברה ביני לבין אנשים אחרים וממשיכה לחבר כל הזמן… במובן מסוים, המוזיקה שלהם עזרה לעצב חלקים מתוך האופי שלי. ושוב, אין פה בעיניי שום משמעות קוסמית - הרי לכל אחד מאיתנו יש השפעות תרבותיות *כלשהן*, בין אם זה קלינט איסטווד, פופאי, צבי הנינג׳ה או לאונרדו דה וינצ׳י. פשוט במקרה הספציפי שלי, ההשפעה המרכזית היא רד הוט… זה הכל. ואני, בתור יוני (ולאו דווקא בתור מעריץ של רד הוט), מאמין שמתוך חוסר משמעות קוסמית נובעת יכולת שלנו להחליט על משמעות בעצמנו (גישה פילוסופית בשם אקזיסטנציאליזם) - אז העלייה לקבר הייתה מחווה אישית שלי כלפי עצמי כדי להכיר באנשים שהשפיעו עליי תרבותית באופן כה נרחב וכדי לתת משמעות אישית להשפעה התרבותית הזו.</p><p>בגדול, פה נגמר השיתוף; אבל אסיים עם ציטוט קטן מתוך שיר פחות מוכר שלהם, ציטוט שמלווה אותי שנים ועוזר לי לקבל החלטות בחיים במובן מסוים:</p><p>“I remember, 10 years ago,</p><p>In Hollywood</p><p>We did some good</p><p>And we did some really bad stuff…</p><p>But the Butthole Surfers said:</p><p>‘It’s better to regret something you did than something you didn’t do’</p><p>Yeah, we were young.</p><p>And we were looking, looking…</p><p>Looking for the deep kick.” ~ Flea, Deep Kick, One Hot Minute.</p>`,
              id: 49
            },
            {
              date: 'December 12, 2024',
              degrees: '16°',
              name: 'Santa Monica',
              shortName: 'Santa Monica',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5BA5F5DC-4CCA-44B7-84C0-59599B663358_9DC2BD1F-C27B-40CB-A32B-E409749121BB.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0EC18D90-F673-490F-8401-4BE048C404E0_B37B5F04-2F4C-421F-8ABE-A40C261C997B.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5BA5F5DC-4CCA-44B7-84C0-59599B663358_9DC2BD1F-C27B-40CB-A32B-E409749121BB.jpg',
              description: `<p>לפני 3 ימים, כשהגעתי ל-LA, ראיתי מלא מוזיקאים שמנגנים על הטיילת בחוף… וגם אני רציתי. אז הלכתי לחנות, שכרתי טרומבון ליומיים, והלכתי איתו איתי למלון. ניגנתי קצת באותו לילה שבו שכרתי, אבל כבר היה מאוחר ולא היו כמעט אנשים בטיילת (הקור, החושך והפיח מהשריפה מבריחים אנשים לתוך הבתים). אתמול עשיתי מסע של 80 ק״מ באופניים, אז נשאר לי רק היום להגשים את הרעיון הזה ולנגן בטיילת.</p><p>התלבשתי בבוקר בחליפה החגיגית כי ידעתי שארצה לעלות איתה למטוס כדי לחסוך את הפאונד העודף של המזוודה שלי, וחשבתי שאם כבר לנגן ברחוב - אז למה לא לעשות זאת בסטייל. יצאתי עם הטרומבון מהמלון, הלכתי לאורך הטיילת, ו… לא באמת מצאתי פינה שרציתי לנגן בה. זה גם לא משהו שקורה בבקרים למען האמת, זה יותר נפוץ אחה״צ כשאנשים חוזרים מהעבודה ורוצים להסתובב בטיילת לאור השקיעה. אז הלכתי.</p><p>אחרי כמה ק״מ הגעתי למזח המפורסם של סנטה מוניקה (אין תמונות כי היה מעורפל בגלל העשן ולא מעניין במיוחד באופן כללי). ישבתי שם כמה דק׳ הלכתי לאכול במסעדה איטלקית את הלזניה הכי מוצלחת שאכלתי בחיי, והתחלתי ללכת חזרה על הטיילת לכיוון המלון שלי.</p><p>בסביבות אחה״צ, כשהשמש כבר התחילה לרדת, ראיתי חצוצרן יושב על ספסל על הטיילת ומתאמן לעצמו על החצוצרה - אז שאלתי אם אפשר להצטרף ולנגן ביחד. הוא היסס בהתחלה, נראה שאינו רגיל לשאלות כאלו מעוברים ושבים, ואולי גם אינו רגיל לנגן עם אנשים אחרים - אך השתכנע כשראה שפניי מועדות לשלום.</p><p>ניגנו ביחד ג׳אז, העוברים ושבים בטיילת עצרו לשמוע ולראות אותנו מנגנים ביחד, בין אם קטעים מוכרים ובין אם אלתור שביצענו במקום. הבחור, ליונל שמו, התלהב מהנוכחות שלי והתחיל לשאול שאלות. דיברנו על פילוסופיה, פוליטיקה ודת, וליונל הכריז שיש משמעות קוסמית לפגישה שלנו היום, שזה לא צירוף מקרים אלא יד מלמעלה כיוונה אותנו לכך… אני לא הבעתי את דעתי על כך, אך כן הסכמתי שאת הפגישה הזו אני לא אשכח. לימדתי אותו לנגן ״הבה נגילה״ כמחוות תודה על כך שהסכים לי לנגן איתו, ונפרדנו לשלום. אגב, בין היתר בשיחה שלנו הוא סיפר שפעם נתן טרמפ לאבא של הלל סלובק, הגיטריסט שלקבר שלו עליתי אתמול. קטע.</p><p>משם חזרתי למלון, ג׳וזי (השותפה שלי לחדר) אירגנה לנו הסעה לנמל התעופה דרך ידיד שלה (שכן גם היא טסה באותה שעה איתי מלוס אנג׳לס, אבל ליעד אחר), והחשתי פעמיי לטיסה שתיקח אותי ליעד הבא שלי - ניו יורק 🗽.</p>`,
              id: 50
            }
          ]
        },
        {
          name: 'New Jersey',
          bgImage: njflag,
          steps: [
            {
              date: 'December 13, 2024',
              degrees: '2°',
              name: 'Newark',
              shortName: 'Newark',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D4E92A89-E4C3-494A-A691-DC1160515EF0_6F8B77D6-5D03-4562-AF30-298FD889D7C2.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0A2AEC9A-C0DA-4E6E-B8EA-2892FF2B55E4_4404713A-3A3B-4A05-A3BE-8DD9C19EE2D7.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/6369F7B9-0869-460A-B55B-07F3D6AB1D7A_301AF7BD-C6BD-4EC1-B19B-883200D74DAD.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D4E92A89-E4C3-494A-A691-DC1160515EF0_6F8B77D6-5D03-4562-AF30-298FD889D7C2.jpg',
              description: `<p>להתראות לוס אנג׳לס, שלום ניו יו- אה… ניוארק!!</p><p>טוב נו, אני חלש בגיאוגרפיה, משום מה חשבתי שניו ג׳רזי זו עיר בתוך מדינת ניו יורק… אבל זו מדינה נפרדת בפני עצמה, וניוארק זו העיר הגדולה בה, ולשם הגעתי היום (ואפילו הספקתי לצלם את תחילת הזריחה מהמטוס).</p><p>ההתרשמות הראשונה שלי היא… מממ… מה הייתה ההתרשמות הראשונה? התרשמות ראשונה, התרשמות ראשונה, תנו לי רגע להיזכר…….. אה, כן - קררררררררררררררררררררר קרקרקרקרקרקרקרקרקר יא רבנן איזו קורררררררררררררר ברררררררררררר 🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶</p><p>אז כן, הצפנתי מעט על כדה״א ומזג האוויר השתנה בהתאם. וזה טוב! ככה נראה חורף! סופסוף יוצא לי לטעום קצת מה זה חורף אמיתי, כזה שצוחק לכפפות חצאי-האצבעות שלי ולחליפת שלוש-השכבות שלי בפנים. למזלי אחותי האהובה סרגה לי כובע צמר ונתנה לי טרם צאתי מהוואי, ואני צפיתי את העתיד וקניתי חם-צוואר איכותי בטוקיו, אז אני די מסודר פה מבחינת ביגוד… אבל אינעל רבאק איזה קור.</p><p>בתמונה השנייה: אני ובחור נחמד שבקושי מדבר אנגלית שהכרתי באוטובוס ביציאה מנמל התעופה של ניוארק.</p><p>ירדתי מהאוטובוס והגעתי למלון הבא שלי, או ליתר דיוק הגעתי לכתובת של המלון; בפועל הייתה שם… מרפאת שיניים? קטע מוזר. ניסיתי ליצור קשר עם המלון אך ללא הועיל. בסוף ביטלתי את הלינה (עם החזר כספי מלא) והגעתי למלון הבא שרשמתי לעצמי בניוארק.</p><p>בתמונה השלישית: אני מחוץ למלון אחרי שפרקתי את המזוודה והוצאתי את כובע הצמר של מיכל. למען האמת לא צילמתי יותר מדי כי… די עוין פה. המבטים לא כל כך נחמדים, אנשים לא אומרים שלום, ושתיים מתוך כל שלוש מילים שאני שומע ברחוב הן fuck או וריאציות שלה. אה כן, וגם משטרות בכל פינה. אולי זה היעד הראשון שלי בטיול הזה שאני לא שש (וגם לא שבע) להגיד בו שאני מישראל… אולי.</p><p>בצהריים הלכתי לישון כי לא היה לי אפילו מקום להניח את הראש בטיסת הלואו-קוסט שלקחתי (טיסות פנימיות זה תנאים אחרים מסתבר), ובערב יצאתי לבר שהיה קצת יותר ידידותי וגם למסעדה לאחר מכן, אז… אולי תחושת העוינות היא רק בשכונה הספציפית שבה נמצא המלון שלי.</p><p>בלילה הלכתי לישון בידיעה שמחר מגיע אחד השיאים הכי גדולים של הטיול הזה - ועליו אספר בפוסט הבא שלי 🦄</p>`,
              id: 51
            },
            {
              date: 'December 14, 2024',
              degrees: '2°',
              name: 'Newark #2',
              shortName: 'Newark',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/989E65E9-B45D-4E87-8389-53ED29183A18_8E559950-C35E-493F-95E1-AAE6781D621A.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/BAC3F8F8-03B8-4655-A159-740D051B748E_1B98D6B1-7413-40F4-9F43-35E198341CE2.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/72E8D988-B930-4366-926F-D970F21FA1F8_DBAAA9A9-BFCE-4D02-AB4D-5A6DDD22A289.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4450BFF1-4650-4F00-9863-0A414C543839_0E109FE5-1943-4457-97B6-FA67A5D59172.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4450BFF1-4650-4F00-9863-0A414C543839_0E109FE5-1943-4457-97B6-FA67A5D59172.jpg',
              description: `<p>החלטתי לפצל את ה-14.12 לשני פוסטים; הראשון (הנוכחי) יתאר את מהלך היום, והפוסט השני יתאר את הקונצרט המיוחד שהלכתי אליו בערב.</p><p>אז היום קמתי, פתחתי כהרגלי את גוגל מפס כדי לראות מה יש באזור, ו… לא הרבה למען האמת. די מפליא בהתחשב בכך שאני בעיר הכי גדולה בניו ג׳רזי. שאלתי את אוון (השותף האמריקאי שלי) אם אני מתבלבל אולי, והוא אמר באופן די חד ״נו בטח, אתה בניוארק, למה ציפית?״. טוב, קצת מפתיע אבל שיהיה 😆</p><p>בכל זאת לקחתי את הרגליים שלי והלכתי לראות מה יש באזור. הבחנה ראשונה: מלאאאא פארקים, מרבדי ענק של מדשאות, מתקני שעשועים, מגרשי משחקים (כדורגל, כדורסל, כדורעף, טניס…), בקיצור הרבה השקעה של העירייה בסביבה. הבחנה שנייה: מלא סנאים 🐿️.</p><p>באיזשהו שלב התיישבתי בבר אקראי לצד חבר׳ה שנראה שהתיישבו ממש מעט לפניי. אני בהיותי אני הייתי שקט בהתחלה, מנסה להבין את הלך הרוח, מה אומרים, מה לא אומרים, איך… איך נהיים חברתיים באזור הזה של כדה״א בגדול. תוך זמן קצר נהייתי חבר טוב של ג׳ק, לאורן ושון אשר ניתן לראות בתמונה האחרונה (משמאל לימין). דיברנו על ספורט, אהבה, מוזיקה, פילוסופיה… סיפרתי להם על הגישה שלי בנוגע למשמעות בחיים, והסברתי שהמשמעות באה לידי ביטוי במעשים קטנים, באינטראקציות קטנות כמו זו שיצרתי איתם בבר… אז לקחנו תמונה כדי להנציח את הרגע המשמעותי הזה, ולאורן ביקשה ממני שאם אני עובר באילינוי… בעצם לא אם, *כש*אני עובר באילינוי עליי ליצור איתה קשר.</p><p>בשלב מסוים נטשתי אותם והלכתי להתארגן לקונצרט שיש לי הערב, ואיחלתי להם הנאה במשחק ההוקי שהם הלכו לראות (לאורן ושון לראות, ג׳ק לשחק). סלאמאת ^^</p>`,
              id: 52
            },
            {
              date: 'December 14, 2024',
              degrees: '2°',
              name: '🌟 SONIC SYMPHONY 🌟',
              shortName: 'Sonic Symphony',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0134F707-DEFE-4280-8584-1F1BC017ADF9_6DD076C3-F1BD-4809-BD75-A4575513572E.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CE2C753E-A346-40B8-A104-8736C471DCB9_0DF76BEB-396E-4A70-8E46-2EF70C6B2E07.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4764AC6A-24F7-419C-AA19-E1EB4D30EE04_FB70BE4E-CEF3-4543-B39E-6A86477D382A.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/fb5888ea-2cfa-4d63-ac8e-50af976ffba4_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/E21B2543-5161-4BD1-8A7A-30D896145767_AC8ED37F-F24B-498E-8D7A-AF7264FE850C.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/61c1f37b-5c82-490c-8e23-87cfcbc56dbc_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/471C8D56-C292-405A-B6DB-15B58CF24B81_A5A2D77C-7A4D-43A8-BEBF-11452B55C5FB.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/1551dad4-94f6-42ab-bb33-785cf714f252_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/BEE05463-297F-435A-A276-2E98E8A973CE_C7C21DF9-B444-472F-859F-D870C0EA7C50.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/96e6b91d-79d8-4078-bb61-beda8b21522a_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3BBEA1BC-C37C-4F98-BD3C-AB68528772EA_1A27F9CB-04BB-475F-A9D9-56342C304176.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/f3212e1b-bb0d-4b9d-9a82-f08e4bcbdae2_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/82BCBF1C-7206-4526-9E72-5B7CAACD8742_B62AE278-B6E6-400E-96B3-C3E2C4FADDA3.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/8ad2ba7b-a48c-4131-bdd7-d3f154458953_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/EF9FE81A-F97E-4233-B5BD-29E6B19C521F_B7FEC10A-738E-49D5-A86F-A8F4716F721A.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/db8a211d-5f94-4e66-87ad-ba9ac2c743a3_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/84320E20-F4D9-4970-8093-86D2D1D17695_B379E4F7-FC0A-4F4B-860D-C185F39EF040.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/868c2d8a-d2a4-4a95-a27b-07b0f51683df_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7373D008-FBCC-4AA0-8D1A-45ADA3050D6E_55822C80-581B-4617-A6A8-D611D01A8BF6.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/c816d1aa-8899-4d1d-9698-b6ffaeaf755f_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/B3DCD221-4254-4EB8-A602-3328E98521AF_1A29473B-6A50-4AD7-8AA6-1BDD73D979A9.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/c53bf93b-8199-4053-bd99-fe6d951e3ec5_video'
                }
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CE2C753E-A346-40B8-A104-8736C471DCB9_0DF76BEB-396E-4A70-8E46-2EF70C6B2E07.jpg',
              description: `<p>היי שלום 😄</p><p>זוכרים שאמרתי שרד הוט היוו ההשפעה התרבותית הכי גדולה שלי (אולי למעט קיפוד כחול אחד)? אז להלן הקיפוד הכחול. אני לא אחפור עליו יותר מדי, כל מה שרשמתי על רד הוט תקף גם כאן, למעט הבדל אחד עיקרי: רד הוט השפיעו עליי מוזיקלית… וסוניק השפיע עליי בהרבה יותר תחומים.</p><p>ושוב, הסיבה היא די פשוטה: זה המשחק הראשון שהכרתי, ונהניתי לשחק במשחק הזה, וזהו בערך. נהניתי ממנו מספיק כדי להגיד ״יאאא אני גם רוצה ליצור משחקים כאלו, איך עושים את זה?״ ומשם למדתי לתכנת ומצאתי את דרכי לטכניון ולאינטל (דרך שמשותפת להרבה טכניוניסטים אגב). נהניתי מהמוזיקה של סוניק מספיק כדי להגיד ״יאאא אני גם רוצה ליצור מוזיקה כזו, איך עושים את זה?״ ומשם למדתי להלחין. נהניתי גם מהויזואליות של המשחקים וניסיתי גם ללמוד עיצוב גרפי… אך שם נחלתי כישלון ביחס למוזיקה ולתכנות, אשר הפכו מגיל 10 להיות שני התחומים הכי חזקים שלי בחיים.</p><p>אבל… הפעם זה יותר מזה. עולם המעריצים של סוניק הוא די… הזוי. פריקי. ביזארי. מיוחד. אין הרבה כאלו באינטרנט. והרבה פעמים שאלו אותי בחיים ״למה דווקא סוניק? מה כל כך מיוחד בו שהוא מושך אליו את האנשים הביזאריים האלו??״. ומעולם לא ידעתי לענות… עד לקונצרט הזה. אני חושב שסופסוף יש לי תשובה, ואולי אני גם מבין מה כל כך משך אותי בקיפוד הכחול הזה.</p><p>אז בואו נלך מעט אחורה: מאז ומנולד אני התקשיתי חברתית. עד עצם היום הזה אני מתקשה, למען האמת. והרבה אנשים שאוהבים אותי נתנו לי הרבה עצות חברתיות, עצות אמת, עצות… עצות שמעולם לא הבנתי. ״אל תחשוב יותר מדי, פשוט תזרום״. אני לא יודע ״פשוט לזרום״; לא יודע למה, זה פשוט לא עובד לי.</p><p>אז מה כן עובד לי? רציונל.</p><p>לפרק את הבעיה שלי לגורמים קטנים, לטפל בהם אחד אחד ובכך לפתור את הבעיה הגדולה.</p><p>ואיך כל זה קשור לסוניק? כי המשחקים של סוניק לוקחים דילמות מהחיים האמיתיים ומציגים אותן במשחק ילדים, מפורקות לגורמים קטנים, גורמים שאני יכול לראות אחד אחד ולהבין איך כל אחד מהם מרכיב את התמונה השלמה. כל אחת מהדמויות של סוניק מציגה תכונת אופי אחת… סוניק, למשל, הוא הבחור המגניב ש-״פשוט זורם״. הוא קול (סטג-דיש על משחק המילים). הוא כל מה שילד חנון שכמוני רצה להיות. הוא תמיד רץ קדימה מבלי להסתכל לאחור, וזה מה שדירבן אותי להמשיך קדימה ולהביט הלאה כשבכיתי, כשהיה לי קשה והייתי מיואש ולא מצאתי את דרכי בחיים. טיילס הוא הילד שלומד לבנות ביטחון עצמי ולהאמין בעצמו, ובכך לתת לחברים שלו לדעת שהם יכולים לסמוך עליו. אני לא אפרט על כל הדמויות כאן, אבל שני אלו היו דוגמאות לאופן שבו המשחקים של סוניק פירקו את החיים לתכונות אופי בודדות, והרכיבו אותן כמו פאזל באופן שבו יכולתי להבין אילו תכונות אופי יותר מתאימות לי, לפתח אותן אחת אחת ובכך לבנות לעצמי אופי משלי שהופך אותי למי שאני.</p><p>חוץ מזה, העולם של סוניק הוא מאוד צבעוני. אני אוהב צבעים (ראו ערך ציפורניים / שיער / בגדים צבעוניים שאני לובש). אני חושב שהם חשובים כדי להפוך את העולם למעט פחות אפור (תרתי משמע). כמו שכל דמות היא תכונת אופי, כך גם כל דמות היא צבע אחד, וכולן ביחד מרכיבות תמונה צבעונית למדי. אפילו המוזיקה של סוניק מאוד צבעונית; אני מוזיקאי כבר הרבה שנים, נודד בין קלאסי לג׳אז לפאנק לרוק ולמטאל, ולא מצאתי עדיין מוזיקה צבעונית כמו המוזיקה של סוניק.</p><p>ויותר מזה - סוניק הוא די wholesome. כן, המעריצים די ביזאריים (ואני קצת אוהב את זה למען האמת), אבל סוניק עצמו הוא תמיד כל כך חיובי, וכך היה גם המופע אתמול; הלהקה שניגנה הורכבה ממעריצים של הסדרה שפשוט נהנו לנגן את השירים האהובים עליהם בפני קהל שזה גם השירים האהובים עליו; המלחין של שליש ממה ששמעתי אתמול הוא מעריץ של הסדרה שרצה לעשות מוזיקה כזו בעצמו, ממש כמו שאני רציתי בעצמי; הסרטון שרץ ברקע (אני חזק היום על בדיחות קרש) בוודאות הוכן ע״י מעריצ(ים) כי הוא היה מלא בבדיחות קטנות שרק אנחנו מכירים, בדיחות שגרמו לקהל להגיב כאילו יד מנצחת מורה לכולנו ביחד להגיב את אותו צחוק / פליאה / תדהמה שיצאו לנו מהפה ברגעים מאוד ספציפיים בסרטון; כל פרט קטן אתמול בערב הוכן ע״י אנשים שאוהבים את הסדרה הזו, נהנים ממנה, ורוצים לתת לאחרים ליהנות ממנה כמוהם. זה פשוט, וזה יפהפה. זה כמובן קצת אידאלי מכדי לייצג את החיים האמיתיים, אבל… היה נחמד לברוח מהחיים האמיתיים לשלוש שעות לתוך העולם הייחודי שלי, ולפגוש שם אנשים שברחו בדיוק כמוני לאותו עולם ייחודי בדיוק. המון מתוכם אגב היו מחופשים לדמויות מהסדרה וזה היה יפהפה לראות אותם ואת האינטרקציות בין ה-״דמויות״ (אגב משהו שהפליא אפילו אותי הוא טווח הגילאים… ציפיתי לראות בעיקר מילניאלס [גיל 25-40], ובאמת כך ראיתי, אבל ראיתי שם גם ילדים ואפילו מבוגרים [שגם הם הגיעו מחופשים]).</p><p>עד כאן מפי אדון ״אני לא אחפור עליו יותר מדי״.</p><p>———</p><p>קיצר, הייתי בקונצרט שהורכב בחלקו מתזמורת סימפונית שמנגנת מוזיקה מהמשחקים של סוניק, ובחלקו השני מצטרפת להקה לתזמורת והופכת את הקונצרט למופע רוק.</p><p>בסרטון הראשון: המנגינה הכי אייקונית של סוניק, מנוגנת ע״י תזמורת.</p><p>בסרטון השני: דוגמה ל-wholesomeיות של הסרטון שרץ ברקע ולתגובה של הקהל אליו.</p><p>בסרטון השלישי: חבורה של אנשים בוגרים מריעים למראה ילדה נרצחת (כבר אמרתי שעולם המעריצים הוא ביזארי?).</p><p>בסרטון הרביעי: אחת הסיבות העיקריות להיותי בסיסט כה מוצלח.</p><p>בסרטון החמישי: יוני נהנה. על באמת.</p><p>בסרטון השישי: סולו מושלם של גיטרה וכינור יחדיו.</p><p>בסרטון השביעי: טוב… אז כמו שאמרתי, המופע הזה הורכב ע״י מעריצים. והמופע רץ כבר מעל שנה. אז באיזשהו שלב מסתבר שהם החליטו להוסיף שירים נוספים למופע; את חלקם הכרתי, ואת חלקם… ובכן, אני לא משחק במחשב כבר שנים, ואני לא בקיא במוזיקה של המשחקים החדשים. היה מעניין ממש לגלות כמה מטאל נכנס לתוך המשחקים האלו 😯</p><p>בסרטון השמיני: מה יכול לבוא אחרי שיר מטאל כבר אם לא שיר ילדים wholesomeי באופיו.</p><p>בסרטון האחרון: שיר נוסף חדש שלא הכרתי ושחתם את ההופעה.</p><p>———</p><p>ההופעה הזו פתחה משהו בלב שלי, גם אם רק לכמה רגעים. באותם רגעים, יכולתי לראות את עצמי מאושר שוב… יכולתי לראות את עצמי עושה את אותם דברים בישראל, מקבץ מוזיקאים ומפיק הנאה בלבבות האנשים הבודדים שזה התחביב שלהם בדיוק כמוני. הלוואי ויום אחד זה יקרה.</p>`,
              id: 53
            }
          ]
        },
        {
          name: 'New York',
          bgImage: nyflag,
          steps: [
            {
              date: 'December 15, 2024',
              degrees: '6°',
              name: 'Arriving at New York',
              shortName: 'New York',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/F8DC90F9-61EE-428E-80FE-D79C23328DA4_7E023866-E077-4760-A6A2-8F8787066D5F.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9ECF567E-E9E6-4375-B45C-FDD128C3BF83_64753658-496A-473C-BE0F-5145E6F67CC3.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5B15B026-9F86-42D8-9145-36E776F4DAA7_B65F5C5C-176E-42DF-BA08-7B499962AF19.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/b0ff7170-e875-4204-ac0c-13ff5e3ce9db_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9E44BE78-2AB0-458B-BC6F-91BF1DA532F8_10FF2C25-456D-4526-9CF4-5362865D34A0.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/6E26F82D-BB02-4140-A086-6E1E03402FF4_00571678-0DF3-4345-BBD9-90EF8E5C5692.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/DEF32579-1E9E-4BAD-A43F-51B005317794_76FB7A1C-E79E-43A2-8ABE-98DA39F91AE2.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/71128BFA-53A5-4525-A2EC-59E84674D0B8_C0E0DCF4-E359-4CD9-826E-E02EF8205530.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/48B162F7-B13E-4E35-82BE-20F22A71A94B_9F857FBB-440C-4AA5-8AC6-704FC323E2BD.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/b11dbe89-157a-468c-939d-d0eb2485f92f_video'
                }
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9E44BE78-2AB0-458B-BC6F-91BF1DA532F8_10FF2C25-456D-4526-9CF4-5362865D34A0.jpg',
              description: `<p>כן כן, הפעם הגעתי לניו יורק, על באמת!!</p><p>עוד שבוע וחצי כריסמס, והאווירה בולטת עד כדי תהלוכות ומשאיות שכמעט באופן מילולי ״מוליכות״ את אווירת החג ממקום למקום (לעיל סרטון של אחת כזו).</p><p>בתמונה הראשונה ניתן לראות את מרכז הסחר העולמי (תחנת העצירה שלי בניו-יורק), ובתמונה שאחריה את מתחם ההחלקה על הקרח שעליו לא עליתי כי כמו שאמרו חז״ל ״זיבי אני משאיר את החפצים שלי באמצע קניון והולך להחליק״.</p><p>בתמונות הבאות ניתן לראות הרבה גרפיטי; מדובר בתמונות הנבחרות שסיננתי בקושי מתוך המבחר הענק של הגרפיטי במלון ששהיתי בו בברוקלין (מלון שכולו מלא בגרפיטי מכף רגל ועד גג).</p><p>בערב הלכתי לבר ג׳אז שהיה כתוב באינטרנט שיש בו ג׳אם היום בערב, ורציתי להשתתף באחד כזה. בפועל הייתה להקה שניגנה ולא באמת ג׳אם, וזה גם לא סגנון הג׳אז שאני הכי מחבב… אבל האווירה הייתה טובה והאנשים חייכניים והיה לו סקסופון אז אני סולח.</p>`,
              id: 54
            },
            {
              date: 'December 16, 2024',
              degrees: '11°',
              name: 'New York, New York 🍂',
              shortName: 'New York',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/A9A13D37-0F00-4551-98ED-D8198B7C246F_5FA3AEAA-17C6-4F42-A758-22B222AC9EF9.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/AFDE8DBE-135F-4CD5-B8FF-9983F894021B_2B9D64BE-42E7-4532-8C9F-8DF5028B9A0F.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C55093D2-00A6-42C8-A5F5-629CADF64E5A_E359D418-3489-4699-86E3-061BA7CAF90B.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C788FA75-FA2F-4190-899A-F1CAFD30FF2F_4CBCEEB4-2126-4F61-A8A8-21C9F6FC9923.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/125970D7-B527-4FAD-AE5F-CEE81E3AB7FD_820FA907-75FF-460E-98CB-F0EC9884D946.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/92EB5495-A285-49A2-BAA9-746FBC35F3F6_16ADA685-7BFB-403B-B259-9E732020D4EB.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CE06B0A9-2875-4077-A951-CBF26FBEB24F_CDA53836-3D74-4BD3-827A-4CC032782033.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/3a37bd43-7cc2-4677-bbac-9f9a29394388_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/A37E41ED-E526-4A18-8B7E-3CDC61EDD444_9D7AD60E-86F0-43FF-A028-681821640AC3.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9EE323F6-7E7B-4ACA-8A1C-E03BE2067036_71F630DB-F54E-4672-9380-CC1DB9C6BAF1.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/AD183E6A-8FE1-4049-846E-B567073CF8A1_C74FDF47-C4AD-41C8-BBBA-5A94B0FC7686.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/48EE441D-31C2-4892-AF4D-2B438DF50A2A_2167BE4A-881E-4744-82D1-24336153E0D7.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/71D43CDA-995B-42A9-98FA-039915757EFF_BBC95C4B-9E0E-460C-B04E-5B6AB3D1E7A4.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0C30EE64-EF10-4308-A993-E13093D06FEF_B255B859-C516-4A86-8435-C8CEBC48398D.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/964A1580-E022-4F9A-93DF-1B90CC6FA667_EE09D480-ECE1-45C6-940F-F4017B1FB39B.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/AF6BE47E-0535-4CDE-A051-E5034D739C22_79F0E9F1-3B35-4C31-9F7C-FD7ED2A283FC.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/AF6BE47E-0535-4CDE-A051-E5034D739C22_79F0E9F1-3B35-4C31-9F7C-FD7ED2A283FC.jpg',
              description: `<p>טוב, בתכלס מחר אני הולך לפנסילבניה לפגוש את אוון, אז היום זה היום המלא היחיד שלי בניו-יורק… מהרררר!!!! אטרקציותתתתת מהררר אעהעאעאהאעההה</p><p>בתמונה הראשונה: הלכתי לראות את פסל החירות אבל הריאות הייתה גרועה (עד כדי לא רואה 10 מטר קדימה), אז לא מצאתי טעם לשלם על המסע הימי לשם. הפסל נמצא איפשהו בכיוון שאליו אני מצביע.</p><p>בתמונה השנייה: הנה מצאתי את הפסל יאללה אפשר ללכת 🗽.</p><p>תמונה #3: סוסים מתנדבים מרצונם החופשי להסיע אנשים על כרכרות ברחבי הסנטרל פארק.</p><p>תמונה #4: סנטרל פארק.</p><p>תמונה #5: מפליא כמה המקום הזה ענק ולא-עירוני בהתחשב בכך שמדובר באמצע העיר הגדולה בעולם.</p><p>תמונה #6: סנאי.</p><p>סרטון: גם אתם חשבתם שהולכת להיות שם נשיקה, תודו.</p><p>תמונה #7: הנה הכתום שלא ראיתי ביפן. ✅.</p><p>תמונה #8: הסנאים הם כבר לא היצורים השעירים היחידים בפארק.</p><p>תמונות #9, #10: אגם באמצע הסנטרל פארק.</p><p>תמונה #11: ברווזים מתפלחים דרך חור בגדר להופעה של אביב גפן.</p><p>תמונה #12: שבץ ולידו כוס בירה.</p><p>תמונה #13: עץ האשוח הגדול של נצרת.</p><p>תמונה #14: אני מסביר למישהי חמודה שנדלקה עליי שאנחנו לא יכולים להיות ביחד כי בשעה 22:04 ברק עומד לפגוע בראש של האמפייר סטייט ואנחנו חייבים למצוא את דוק מהר כדי שאוכל לחזור בחזרה לשנת 2045. וכן, עצרתי כמה וכמה אנשים ברחוב עד שזוג חמוד אחד הסכים לעזור לי לצלם את הבדיחה המטומטמת הזו.</p>`,
              id: 55
            }
          ]
        },
        {
          name: 'Pennsylvania',
          bgImage: paflag,
          steps: [
            {
              date: 'December 17, 2024',
              degrees: '15°',
              name: 'Princeton…?',
              shortName: 'Princeton',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/86ED9C28-D220-4D0E-A49B-013496D180AC_78DB3D21-E986-4A2A-A30D-9CEC2D9B02FE.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8CEC1BA8-8D3F-4E47-AB2E-8F8C879A647F_39C96A1B-29B0-4003-BD45-0C6419E7AC4D.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C3454622-5873-4C0D-8851-1234B3448228_5F3A0F81-0D97-4D9A-9754-5F426A961BB7.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/AA42AA00-3312-43AD-BC01-761FF0402784_E80814A6-FE66-4E11-BE93-7EB2DE0CE4B5.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/AD9A19AF-287D-4590-856B-169ECCF7C713_7709AE39-2D39-4ABE-82DC-D82C3877AB9B.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/834FF3DF-C7A3-4D5A-9A8C-C4F3EAD2DF3E_3DACA948-79B5-4B7C-A9F6-79A14578049B.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/BC40B634-A872-4B92-9249-4906DE074709_563F424C-464C-4AE3-9C11-00D4D4809F48.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/90331794-9C53-4479-9BA6-5170F66D590B_A8EF3E99-ACAB-4295-9879-6910F4C5A1D2.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/291C0CF4-F6C1-4D6F-A1B3-77EA0BF3D248_F69BA2B4-85A6-4201-82D1-0F682A26CEDC.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/90331794-9C53-4479-9BA6-5170F66D590B_A8EF3E99-ACAB-4295-9879-6910F4C5A1D2.jpg',
              description: `<p>אז התכנון היה כזה: אוון אוסף אותי מפרינסטון (אשר בניו-ג׳רזי, הממוקמת באמצע בין ניו-יורק לפנסילבניה) בשעה 18:00, כלומר עד אז אני חופשי. אז כמובן שהגעתי לשם כבר בצהריים והתחלתי לטייל.</p><p>בעיה #1: לפי גוגל אמורים להיות אוטובוסים… אבל בפועל אין.</p><p>בעיה #2: התחנה שירדתי בה בפרינסטון ממוקמת באמצע שום מקום (כלומר לא אזור עירוני). כל מי שירד בה עלה על טרמפ עם מישהו שחיכה לו (כי כאמור אין אוטובוסים).</p><p>פתרון: הולכים ברגל.</p><p>אקצר ואומר שהלכתי היום כמעט 18 ק״מ. שזה לא כזה הרבה בהתחשב בימים אחרים בטיול שלי (לרבות אתמול שבו עשיתי 24)… אלא שה-18 האלו היו במלואם עם מזוודה של 23 ק״ג. ותיק על הגב. וביער (כי זה או יער או כביש ראשי ללא שוליים). הגב שלי לא בדיוק אמר לי תודה יום למחרת 🫠.</p><p>לפחות יצא לי לראות נופים יפים, לאכול במסעדה הודית די מטורפת ו-100% טבעונית, לגלות את מספר הטלפון של אלוהים, ובסוף (סופסוף) להתאחד עם אוון ולצאת איתו ועם המורה שלו מהתיכון למסעדת בשרים יוקרתית (האיש הזה כל כך טוב בלשמור על קשרים עם אנשים, וואו. מורה לאנגלית מהתיכון).</p><p>לסיום הלכנו לבר השכונתי האהוב עליו ומשם לדירה שבה הוא דר עם אמא שלו ואחותו בעיר Hatboro (הטבורו) שבפנסילבניה. אמא שלו כל שנה טסה לפלורידה בחורף כי אינה סובלת את הקור, ויש שיגידו שאני בחור חם אז היא די מחבבת אותי (🥁); היא הציעה בשמחה את החדר שלה עבורי בעת שהותי בדירה הזו, והצטערה שלא יכלה לראות אותי (היא מכירה אותי מהסיפורים של אוון וכי נפגשנו בעבר בעת ביקורה בישראל ובילינו זמן רב ביחד).</p>`,
              id: 56
            },
            {
              date: 'December 18, 2024',
              degrees: '14°',
              name: 'Philadelphia',
              shortName: 'Philadelphia',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CC8D93D1-C94D-4107-B707-7AE0C88F6C76_1E6391B5-49F5-4F89-97B5-4604F5E46F89.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/206CA9F7-1FA1-4305-8A18-38B9444AAD83_36860F08-6BB4-4FB3-B4CE-6C84F2F1D28B.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/05C11C89-F450-46BB-B0C8-CD81FCD531E9_73AA0828-ED95-4E39-8D3E-4EB9A8BCDC21.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D1375B7F-BB25-4FE3-9D6D-95A45426DBE3_A23756F5-7DF5-4FB2-A91D-A0088F6DCB66.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2D308EBE-86EA-49D5-8DC1-BB57835BEE07_8C71BCA3-EC3C-4D19-9B99-7FC3D4596F38.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/390781be-7643-4469-8b7d-9cfbd44d8c02_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/41F2195F-E308-4672-AA58-D17CE0751C06_350F5421-F6A3-481C-970F-3A84FE517BCB.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/05C11C89-F450-46BB-B0C8-CD81FCD531E9_73AA0828-ED95-4E39-8D3E-4EB9A8BCDC21.jpg',
              description: `<p>אוקיי בואו נשחק ארץ עיר. האות פ״ה.</p><p>חי: פרפר.</p><p>צומח: פלוקס (שלהבית).</p><p>דומם: פעמון.</p><p>ארץ: פנסילבניה.</p><p>עיר: פילדלפיה.</p><p>אישיות: וויליאם פן.</p><p>מאכל: פילי צ׳יז סטייק.</p><p>מה משותף לכולם, חוץ מזה שכולם מתחילים בפ״ה? את כולם ראיתי / טעמתי היום. טוב, את וויליאם לא בדיוק ראיתי או טעמתי… אבל הייתי ליד פסל ענק שלו שבו אפשר לעשות את שניהם. תיאורטית בלבד!! תיאורטית אפשר לעשות את שניהם. מקווה שאף אחד לא עשה את השני. עדיין.</p><p>אז היינו בפילדלפיה, עיר הבירה של פנסילבניה, עיר היסטורית חשובה שכן בה נחתמה הצהרת העצמאות וארצות הברית הפכה להיות ישות עצמאית ב-1776. הסתובבנו בין מונומנטים שלמען האמת… לא עניינו אותי מספיק כדי לצלם. זה היה בנאלי מדי עבורי. ״בחדר הזה ממש הם הכריזו על העצמאות!!״… פסדר, מרגש.</p><p>הפעמון שהצטלמנו איתו נקרא ״פעמון החירות״, והוא הפעמון שבו צלצלו בארבעה ביולי 1776 כדי לקרוא לתושבי העיר לשמוע את הכרזת העצמאות. כתוב עליו ציטוט מספר ויקרא אגב: ״ וּקְרָאתֶם דְּרוֹר בָּאָרֶץ, לְכָל יֹשְׁבֶיהָ״.</p><p>בנוסף למוזיאון והמונומנטים שקשורים להיסטוריה של העיר, יצא לנו להסתובב גם בשוק, חנויות בגדים, לראות שילוב של בננה ומנורה (או במילה אחת - בנורה), ובסוף להשתקע בבר העתיק במדינה (שקיים שם כבר מהמאה ה-18), לאכול אוכל ובירה אותנטיים וזולים לרקע מסך שמציג… Cartoon Network? תחי אמריקה 🇺🇸🇺🇸</p><p>בתמונה האחרונה: אניה, יוני, אוון (מימין לשמאל).</p>`,
              id: 57
            },
            {
              date: 'December 19, 2024',
              degrees: '7°',
              name: 'Princeton(!)',
              shortName: 'Princeton',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/86D0761D-7ABB-4053-916D-22E751BDE099_395F834C-8083-4E38-93B6-DE1B06387FBF.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/86D0761D-7ABB-4053-916D-22E751BDE099_395F834C-8083-4E38-93B6-DE1B06387FBF.jpg',
              description: `<p>את הבוקר פתחנו אוון אניה ואני בדיינר אמריקאי, כיאה לבקשתי לחוות חוויות אמריקאיות אותנטיות (וכיאה לאהדתם של אוון ואניה את הדיינרים). אני ביקשתי ביצים ובייקון. בטוסט. מטוגן. כי למה לא (אמריקה 🇺🇸). כתוספת רציתי משהו יותר מגוון מצ׳יפס, אז ביקשתי וקיבלתי שעועית שדחיתי מהקערה שלי אחרי ביס אחד בדיוק כי מישהו שם החליט שזה הגיוני לבשל שעועית עם סוכר (והרבה ממנו). 🤢.</p><p>לאחר מכן המשכנו לעוד כמה סידורים, נפרדנו מאניה שהלכה לעבוד, ואוון ואני המשכנו לפרינסטון לבקר מכרה ותיקה שלו בשם מרי-אן.</p><p>מרי אן היא עו״ד בשנות ה-70 לחייה. היא איטלקיה במקור, אך אמריקאית גאה לא פחות. היא אנרגטית, קופצנית, חמה, חייכנית, בדחנית… ממש ציפי שביט אמריקאית. אוון היה עושה אצלה פעם עבודות בית ומשם ההיכרות שלהם.</p><p>המטרה ה-״רשמית״ של ביקורנו הייתה כריתת עץ קטן מהיער שמאחורי האחוזה של ציפי כדי שיהווה לנו עץ חג מולד, אך הגענו באיחור וכבר היה חושך אז ויתרנו והמשכנו ישר לארוחת הערב האיטלקית שחיכתה לנו (עם אוכל אמיתי, לא מקופסאות שימורים ולא מבושל עם סוכר 🥰). השיחה זרמה והתקבלה החלטה לעשות את כריסמס ביחד (למרות שהבעתי התלהבות מכריסמס אמריקאי אותנטי, המארחת שלנו דווקא התלהבה מהרעיון של כריסמס יהודי שכולל משום מה אוכל סיני… אסביר בהמשך).</p><p>בתמונה: אוון, ציפי שביט ואני (מימין לשמאל).</p>`,
              id: 58
            },
            {
              date: 'December 20, 2024',
              degrees: '2°',
              name: '🤧🤒😷',
              shortName: 'Achoo',
              media: [
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/42F67ABF-2BA9-4572-B8DA-B88035307139_5015E8FD-9DAC-473A-A669-1F21F2194203.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/1fdb827f-dfc1-460b-b469-22d15408b86d_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/967B0BC9-F1E6-4A17-9A9A-36128FD1DF77_F774CE47-E48B-4316-B825-414E98E76068.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/01B5BE61-45B4-45A4-AFB1-7577FDD242E5_DAF55FC2-529E-49BB-99F6-041B20233C72.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/01B5BE61-45B4-45A4-AFB1-7577FDD242E5_DAF55FC2-529E-49BB-99F6-041B20233C72.jpg',
              description: `<p>בואו נלך רגע יומיים וחצי אחורה… זוכרים שהלכתי 17 ק״מ עם מזוודה באמצע היער? באותו יום הגעתי לאוון, ולמען האמת באותו לילה… לא כל כך ישנתי. בעצם הייתי גמור, והרגשתי כל כך תשוש ועייף שאני חושב שנהייתי קצת חולה.</p><p>במהלך היומיים האחרונים המשכתי להרגיש קצת תשוש וחלוש, לא שזה מנע ממני להמשיך לטייל; אבל היום כבר הייתי מחוק לחלוטין וביקשתי לנוח בבית ולא לעשות כלום.</p><p>ואני מתכוון ממש, לא לעשות כלום. בעצם ביומיים הבאים (20.12-21.12) נשארתי שוכב במיטה כמו זומבי, בלי לאכול, אפילו בלי להיות בטלפון… נטו שוכב ונותן לגוף ולמוח שלי לנוח (או להיאבק במחלה, מה שבא להם באותו רגע).</p><p>אז קצת חבל, כי ביומיים האלו פספסתי את השלג היחיד שאולי אראה באמריקה… אבל לפחות הספקתי לצלם אותו מבעד לחלון, ולחזות בעיניים שלי (לא צולם בוידאו) במשב רוח בודד מנער עץ ומפיל כמויות גדולות של שלג שהצטברו עליו במהלך כל הלילה.</p><p>בנוגע למחלה אגב - בעת כתיבת שורות אלו (26.12) אני כבר מרגיש הרבה יותר טוב, אוון ואני עברנו את הויכוח שבו הוא מסביר לי שאני צריך לראות רופא ואני מסביר לו שאני צריך ויטמין סי ושילך לקנות לי בבקשה פירות הדר (ביומיים שהייתי דבוק למיטה שתיתי רק שייקים והם עזרו לי מאוד), והכל טוב אצלי. אבל זו באמת הייתה המחלה הכי קשה שלי שאני זוכר מאז… מאז התיכון למעשה. 8 שנים. וואו. אני אכן צובר זכרונות בטיול הזה 😄</p><p>בתמונה האחרונה: אלן, החתול שאוון אימץ בחיפה ולקח אותו איתו כל הדרך לפילדלפיה.</p>`,
              id: 59
            },
            {
              date: 'December 24, 2024',
              degrees: '3°',
              name: 'Christmas Eve 🎄',
              shortName: 'Christmas Eve',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/F24DD5E2-F87E-4DA4-926E-42C96D0FFCDA_54FE14B5-E045-4426-819C-4F7786520109.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/21D5FC38-72D3-43F9-94E4-8474D8F605B3_2D3FEA41-E725-41C7-83E4-BF6BBE0872DF.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/38781BE3-F371-4639-9770-2977A56745B8_D18A9613-D11E-4BBD-98A7-685EEF702561.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/57b26097-2aee-4305-b812-3d1afbaa2e29_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/BE557489-5365-4F3C-B95C-2D9087B9B157_A339956D-3598-47C7-8111-EEB878023AEB.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/f189814a-79a2-47df-aaf3-df1c83b5924a_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4B211A10-F002-490B-854A-FC8340B6E657_11661FE3-8329-464C-8CE6-718A52177AB0.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/394F42F8-71E6-44A4-BF6F-9A47DCA9D517_AC9B6DFC-BC82-456B-B3E6-8A086F4D4674.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/fccf3ce5-0203-463b-9a7b-3913f8058063_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/57404117-A714-48DE-894C-13A39AF0E0C7_15D42D8D-713F-46E5-93EC-20FE67DF1127.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/ebde46a6-1449-423e-a537-e0b796ea7f07_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/30317685-0E57-4357-97E3-0FDD293CE77E_6D366EC5-8FB1-460D-A6BC-92BD86D11090.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/eca863d9-bace-46e5-ac33-1ca2b0787582_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/23DAC418-5378-4F1A-9FCA-2A63DE819F67_4C7447FD-192C-4ADD-AA0A-6D4CDBB16061.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9ACF4AAF-D130-4D92-9C63-FA53389951FE_9AAFBB14-B197-4B6A-8B98-137015D00648.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/55A29175-EFF4-4505-901C-B119AB232852_DC83F3A9-B8ED-4E46-A5AA-7C8DACDF0FDC.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/56772CFB-F382-48B3-83E3-B24AB30ED366_96E24A96-94EC-4846-A5C1-808635D6B9D7.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/21D5FC38-72D3-43F9-94E4-8474D8F605B3_2D3FEA41-E725-41C7-83E4-BF6BBE0872DF.jpg',
              description: `<p>זוכרים את ציפי שב- זאת אומרת, זוכרים את מרי אן?</p><p>אני אמרתי לאישה החביבה הזו שנשמח לעשות אצלה את כריסמס, ואכן כך היה; מרי אן קיבצה בביתה מספר אנשים שלא היה להם עם מי לחגוג את כריסמס, וכך היינו קיבוץ גלויות קטן: מרי אן האיטלקיה ביחד עם שני ילדיה (בגילאי ה-30 לחייהם), אוון האמריקאי, יוני הישראלי, רוברט הבריטי ביחד עם אימו האיטלקיה, דלידה (אני חושב שזה היה שמה) ההודית - כולנו יחדיו תחת המעטפת של כריסמס.</p><p>ערב כריסמס, כך מסתבר, מתחיל בכלל בצהריים - כשהגענו בשעה 14:00 שאר הנוכחים כבר היו במקום, מתכוננים לערב כריסמס איטלקי.</p><p>מה זה ערב כריסמס איטלקי אתם שואלים את עצמכם?</p><p>שאלה יפה.</p><p>מדובר בראש ובראשונה במתאבנים בדמות קאלצונה ושאר מאפים איטלקיים דומים אשר נעשו במקום וחולקו לאורחים ישר כשיצאו מהתנור / שמן. למנה העיקרית הייתה פסטה ברוטב פירות ים שבושל במשך שעות רבות והכיל כמיטב המסורת 7 סוגי מאכלי ים (אני אישית מניתי ארבעה, אבל מי סופר).</p><p>במשך כל הזמן הזה, מ-2 בצהריים ועד סביבות 10 בלילה… דיברנו. כל האורחים דיברו והכירו, חלקו חוויות מהחלקים השונים של העולם, התבדחו ודיברו על כל נושא אפשרי למעט פוליטיקה. מדהים בעיניי.</p><p>בשתי התמונות הראשונות: עץ הכריסמס שאוון הביא הביתה, לפני ואחרי שקישטנו (קישטתי) אותו.</p><p>בשני הסרטונים הבאים: אמנם השלג כבר הפסיק לרדת, אבל הייתי חייב לערוך קרב כדורי שלג קטן עם אוון רק בשביל ״לסמן וי״ על החוויה.</p><p>בשני הסרטונים הבאים: שלג.</p><p>בסרטון הבא: האח בבית של מרי אן (אח אמיתי, כמו שרואים בסרטים).</p><p>בשתי התמונות הבאות: אוון לובש סינר טבחים מסוגנן בעת טיגון לביבות, ומיד אחריו תמונה של אמא של רוברט שגילתה את הסינר הזה והייתה חייבת לגלות מנין קונים אחד כזה (התשובה הוא מונציה, אגב). תראו את האושר בעיניים שלה.</p><p>בשתי התמונות הבאות: אחרי מרי אן לא חזרנו ישירות הביתה, אלא עצרנו אצל ג׳ון, החבר הכי טוב של אוון מפנסילבניה, כדי להגיד חג שמח לו ולמשפחתו. בתמונות רואים שניים מתוך ארבעת בתי השוקולד שעיצבו בני הבית כחלק מהתחרות השנתית של… עיצוב בתי שוקולד. רגע לפני שאוכלים אותם (יום למחרת). יאמי.</p>`,
              id: 60
            },
            {
              date: 'December 25, 2024',
              degrees: '3°',
              name: 'Christmas Day 🎅🏻',
              shortName: 'Christmas Day',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/542361B3-F792-4525-9C7A-740E77B070B1_762CF59F-EDF1-4B61-A6AC-8E9A1EB26440.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/10971769-AA64-4F4E-9C12-6BC107B45DB3_6A7438B1-8B8D-4EE5-8F57-84D8CB7F8F76.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/542361B3-F792-4525-9C7A-740E77B070B1_762CF59F-EDF1-4B61-A6AC-8E9A1EB26440.jpg',
              description: `<p>את כריסמס עצמו חגגנו בבית. אני החלטתי לצפות בסרט הכריסמס האהוב עליי, המטריקס, בזמן שאוון ישן עד הצהריים כמיטב המסורת. ואני לא מדבר על מסורת של כריסמס כמובן, אלא המסורת היומיומית שלו.</p><p>בצהריים עשינו את כל מה שהיהודים באמריקה עושים בכריסמס - הלכנו למסעדה סינית (מסתבר שזו באמת הקונוטציה של ״כריסמס יהודי״, כנראה כי מסעדות סיניות הן היחידות שפתוחות בחג עצמו), ולאחר מכן צפינו בסאות׳ פארק עד דלא ידע.</p><p>בתמונה הראשונה: אני לא צריך לספר לכם.</p>`,
              id: 61
            },
            {
              date: 'December 26, 2024',
              degrees: '4°',
              name: 'Jamison City 🃏',
              shortName: 'Jamison City',
              media: [],
              bgImage:
                'https://i0.wp.com/cascadescasinokamloops.com/wp-content/uploads/2021/01/Homepage-GamingPage-PokerImage-scaled.jpg?fit=2560%2C1787&ssl=1',
              description: `<p>הערב הלכנו לשחק פוקר עם חברים של אוון מהעבודה. מחיר כניסה: 50$. סכום יציאה של יוני: 165$. יפה.</p><p>במהלך הערב יצא לנו לדבר על הרבה נושאים, בין היתר פוליטיקה, ואני בעצם שמתי לב שלא היה מקום אחד בכל הטיול הזה עד כה (וכנראה גם לא יהיה) שבו אחשוש להציג את עצמי כישראלי ולהביע את השקפת עולמי כישראלי, בין היתר על הפוליטיקה בישראל. נראה גם שאנשים מכבדים זאת - לא יצא לי להיתקל פעם אחת באמרות בסגנון ״free palestine״ או באנשים שמנסים לבטל את הלגיטימיות שלי כישראלי או משהו בסגנון הזה. השיח תמיד היה מכבד, ואנשים תמיד התעניינו לשמוע את השקפת עולמי כאחד שגר בישראל.</p><p>מעבר לפוליטיקה יצא לנו לדבר על מוזיקה, עבודה, תכנות, ואני חושב שזו הזדמנות טובה לספר שמגיע לי מזל טוב - כי חתמתי היום על חוזה משרה מלאה באינטל ואתחיל בפברואר ישר כשאני חוזר לארץ 🥳🎉.</p>`,
              id: 62
            },
            {
              date: 'December 28, 2024',
              degrees: '9°',
              name: 'Hatboro',
              shortName: 'Hatboro',
              media: [
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CABBCA14-913E-43F4-A379-DE1E7F96A707_6A4B5B27-C11E-446F-8A19-9CEBF7F630AF.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/d8bf55b4-c502-47e6-9774-1878aef994b4_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D3F94B5A-D05A-4B39-92F9-61B4782AB6E0_AB686ED1-60F2-4D67-8E5D-AE6E5097F897.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/d917ce0b-f424-4440-9b95-ebc222116dda_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0FCDAB58-E4D2-4A8B-BE68-8D946D1C2D70_7414BBC5-92EC-4735-B574-A0567A0C913A.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/f39d89fe-0e20-4a9f-aaa1-66931c8c0e10_video'
                }
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CABBCA14-913E-43F4-A379-DE1E7F96A707_6A4B5B27-C11E-446F-8A19-9CEBF7F630AF.jpg',
              description: `<p>השהות שלי אצל אוון בתכלס מהווה סוג של חופשה בתוך חופשה, אז… אני לא עושה יותר מדי. בעיקר נח, משחק עם אלן החתול ומדבר עם אוון על דברים. לכן אתמול והיום לא עשיתי כלום, למעט לצאת עם אוון למסעדות ולברים.</p><p>להלן: ג׳ון, חבר הילדות הכי טוב של אוון (שפגשתי בערב כריסמס), מנגן בבר מקומי.</p>`,
              id: 63
            },
            {
              date: 'December 29, 2024',
              degrees: '18°',
              name: 'Doylestown',
              shortName: 'Doylestown',
              media: [
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2509A0B7-FEA2-408A-B114-FD068BE7A37C_66CDCA6F-0741-4FAE-AC8C-D9075BDFC1D2.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/f024644f-d71b-4310-bc34-7ec2c07e72c7_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/BF4F8632-41AB-4700-8760-7997CF7042E5_9CF9DCD0-B1B8-46E4-9188-4A9639210023.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/8001581e-dba5-425c-9299-8999ffb0ccf2_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/E09C839E-2EF9-495F-9E3A-19B078D85B87_39942432-AC49-4F6B-AC26-045B8E8E704A.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/BF4F8632-41AB-4700-8760-7997CF7042E5_9CF9DCD0-B1B8-46E4-9188-4A9639210023.jpg',
              description: `<p>הערב יצאנו לשחק עם מייק וחברה שלו (שכיסחתי בפוקר לפני כמה ימים) גולף וירטואלי, שזה משחק שחובטים בו בכדור גולף אמיתי עם מקלות גולף אמיתיים - אבל הכדור עף לתוך מסך, ומחשב מחשב את הכיוון והמהירות של הכדור ומציג את ההתקדמות שלנו על המסך. נחמד סה״כ. לא ידעתי שיש כל כך הרבה סוגים שונים של מחבטים, עם מאפיינים שונים לכל אחד.</p><p>בתמונה האחרונה: נס גדול היה שם. (הנס הוא שלא סיימתי אחרון בגולף).</p>`,
              id: 64
            },
            {
              date: 'December 30, 2024',
              degrees: '15°',
              name: 'Hamilton',
              shortName: 'Hamilton',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/237504FF-C040-464D-98C4-6C9066017554_C153BFF6-F78E-4079-A6B5-2A03839FE29B.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D8602DDB-7E2F-4960-8631-85374D320D90_4237D0E4-58CC-4556-9CC4-0FA056AD8C57.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C678DBCC-5E94-43DA-AC20-3313221CE5B6_B686ACFF-2D5C-4CA8-87EF-7564245BDAFA.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9BDC4FCC-2EDC-41FB-A392-3AF83B57347E_D7D6A443-6A0B-4439-A8A5-05BEDADACBBC.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0FE73194-774E-4B0D-AFA1-810FBA0A42EC_BEF1BA81-20AA-410E-A349-0002CEF67728.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/a7f556c0-f09a-45a4-8d21-34f9f45fe44c_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0745E943-355F-4A87-B74A-A89AE0137DC3_61911198-599F-4119-8D3E-9702CF9CF707.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/963E55EB-33A6-4745-99F8-B16210C73B6D_FB71BB9E-5137-43D9-B76A-F49840BD0BE5.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/DC53E538-2282-4C1F-BFCE-DB94DDC3ED81_C63A0C57-0E54-472D-8260-325AA18F3B0A.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/237504FF-C040-464D-98C4-6C9066017554_C153BFF6-F78E-4079-A6B5-2A03839FE29B.jpg',
              description: `<p>את הבוקר פתחנו אוון ואני בטיול בטבע ביער לא רחוק מהבית של אוון. לאחר מכן המשכנו להאטבורו לאכול ולהסתובב קצת. בין היתר עצרנו בספרייה שנבנתה ב-1755, קצת לפני שארה״ב הייתה ארה״ב. בתמונה השנייה ניתן לראות שהספרייה מחולקת ל-2: למטה הספרייה המודרנית בה ניתן לשאול ספרים כמו כל ספרייה רגילה, ולמעלה הספרייה הישנה שלא ניתן להיכנס אליה כי גם ככה אם ננסה לגעת בספרים שנמצאים שם (חלקם בני מעל 500 שנה), סביר שהם יתפוררו לנו בין האצבעות. זה לפחות מה שהספרן אמר.</p><p>בתמונה השלישית: ספר ענק על מלחמת הכוכבים, בו (בין היתר) תמונות של איך ג׳ורג׳ לוקאס דמיין את הסרט לעומת איך הסרט נראה בפועל.</p><p>בערב המשכנו לחברים של המשפחה של אוון. מדובר במשפחת יהודים אמריקאים שגרים בהמילטון, ניו ג׳רזי. הדלקנו איתם נרות חנוכה, אכלנו כיד המלך, ולאחר הארוחה ירדנו לחצר ואכלנו מרשמלו על האש כנהוג בחנוכה.</p><p>המשפחה מאוד מוזיקלית, אז יצא לי לדבר הרבה עם אב ואם המשפחה על מוזיקה. בין היתר גיליתי שאם המשפחה, בוני, שיחקה את גולדה, אשתו של טוביה החולב במחזמר ״כנר על הגג״ בהפקה מקומית. בוני מאוד אוהבת את המחזמר והסרט, ומכיוון שאינה ישראלית הופתעה לשמוע כשסיפרתי לה שטופול שיחק דמות דומה בסרט ישראלי מפורסם ומוצלח מאוד, ושמחה לקבל ממני קישור לצפייה ישירה ב-״סלאח שבתי״ עם תרגום לאנגלית.</p>`,
              id: 65
            },
            {
              date: 'December 31, 2024',
              degrees: '15°',
              name: 'USA SUMMARY 🇺🇸🗽',
              shortName: 'USA Summary',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/F15305F6-C600-4781-A035-53B05BA03A51_6E41F531-A002-4C2F-8F49-91A73E4AB938.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/F03A0940-17CF-41F1-9061-F112FC9C8CF2_F29F2174-5989-4E71-8CB9-B08D65F6DC2B.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/18283FE5-0D02-4D6A-BCBD-FD3DC122A9C7_A6619A01-27E4-4EE8-A68A-46110BB3879F.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/18283FE5-0D02-4D6A-BCBD-FD3DC122A9C7_A6619A01-27E4-4EE8-A68A-46110BB3879F.jpg',
              description: `<p>עשיתי סיכום ליפן, מן הראוי שאעשה סיכום דומה לשליש השני של הטיול שלי, הלוא הוא ארצות הברית.</p><p>מה אהבתי בארה״ב:</p><p>העובדה שכל מדינה מעט שונה. ארה״ב היא כמו ניסוי, קערת פטרי המחולקת ל-50 תאים, כל תא עם מאפיינים קצת שונים - והברירה הטבעית עושה את דרכה כבר 250 שנה כדי לראות אילו תאים מצליחים יותר ואילו תאים מצליחים פחות. הצלחה היא כמובן רעיון סובייקטיבי לחלוטין, ולכן כל אזרח יכול לבחור את התא המוצלח בעיניו מבין 50 התאים ולהתמקם שם בהתאם. קונספט נחמד.</p><p>מה לא אהבתי:</p><p>למרות ההסתכלות על ארה״ב כעל ניסוי חברתי ארוך טווח בעל 50 מדינות עם חוקים שונים העונים על רצון ציבור הבוחרים - אני חושב שציבור הבוחרים לאו דווקא יודע מה טוב עבורו, ולכן הניסוי נועד להיכשל בטווח הרחוק. בנוסף, התרבות מאוד שמה דגש על טובת האינדיבידואל (בניגוד ליפן למשל ,ששמה דגש על טובת החברה), קונספט שמחליש בעיניי את החברה עצמה, ואני חושב שתרבות כזו סופה להפסיד ב-״מירוץ התרבויות״ שמתרחש על פני כדור הארץ.</p><p>מה הפתיע אותי:</p><p>טיילתי עד כה בחיי בערים רבות (יחסית), חלקן באסיה, חלקן באירופה וחלקן בארה״ב - ועד כה העיר היחידה שהשתוותה במחיריה למחירים של ישראל היא… ניו יורק, אחת הערים היקרות בעולם. ידעתי שישראל יקרה, ועדיין… לא נעים לראות עד כמה. לפחות התספורות אצלנו זולות ביחס לעולם ^^</p><p>בסיכום של יפן הוספתי סיבות למה אני חושב שהייתי (או לא הייתי) יכול לחיות שם, בהתבסס על המבט הקצר שקיבלתי על המדינה. הפעם אין לי מה לדון בזה יותר מדי - אני לא רואה כמעט אף סיבה שהייתה גורמת לי להעדיף את ארה״ב על פני ישראל (אולי רק יוקר המחייה). אני כמובן חוויתי רק טעימה קטנה מ-4 מדינות מתוך 50, ויכול להיות שקולורדו, טקסס או וושינגטון היו מעניינות אותי יותר… אין מה לעשות, אצטרך לבחון את התזה הזו מתישהו בעתיד.</p><p>התחנה הבאה - אמסטרדם 🇳🇱🍀🚬</p>`,
              id: 66
            }
          ]
        }
      ]
    },
    {
      name: 'Europe',
      bgImage: euflag,
      countries: [
        {
          name: 'Netherlands',
          bgImage: duflag,
          steps: [
            {
              date: 'January 1, 2025',
              degrees: '9°',
              name: 'Amsterdam',
              shortName: 'Amsterdam',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3548C7A3-DB9C-4D4F-B0EC-C5B70FC01361_080992A4-0D9F-4F5C-A0A8-3AC39DC55FD4.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/454810C7-0C0F-41E3-8119-D247B5C38AA1_70D9C473-F5EE-49EC-AF9B-42AAC7B26470.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0F35E099-4E78-4272-8556-5A013D2F34ED_03A06A4C-2B0C-4CA9-8BAD-142A960FB9CB.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/205b4366-ef59-4a30-8146-f14987412956_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3E61AEB9-3708-4ED2-96D3-10727E10DBCF_438C7C04-1445-4C74-8702-93C8FC974C35.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/0dda735a-01cc-4c7d-80cf-486227a21e88_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1F53378D-857D-4770-A55D-17A39D16D6FA_E1731669-31A9-4234-8CB8-79166D7705F2.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/eec57078-b77e-4d94-b450-a3ab185d587e_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7A8A332F-71EE-4387-BBFD-7A931957DBF8_A63DEEF9-C8D9-4296-AA32-A11297EB8664.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/60E43EE3-6269-4C91-A9F0-9927126180AC_5D09431D-446E-4C9B-9C5A-010F8AEC9BFC.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7A8A332F-71EE-4387-BBFD-7A931957DBF8_A63DEEF9-C8D9-4296-AA32-A11297EB8664.jpg',
              description: `<p>התכנון: יציאה מניו-יורק ללונדון ב-31.12 בשעה 20:30, קונקשן של שעתיים, ומשם טיסה לאמסטרדם.</p><p>דה פקטו: הטיסה מניו-יורק התעכבה בשעתיים בשל מזג האוויר (כפי שניתן לראות בתמונה השנייה), לכן פספסתי את הטיסה לאמסטרדם ועליתי על הבאה בתור (שיצאה פחות משעה מרגע הנחיתה שלי בלונדון… אפילו דיילי הקרקע רצו איתי כדי שאספיק לטיסה 😂).</p><p>מכשול הבא בתור: ״למה הגעת להולנד אדוני?״</p><p>במילים אחרות, חיכתה לי חקירה של כחצי שעה בבידוק הבטחוני, חקירה שבמהלכה שלפתי את הטלפון והראיתי את האפליקציה פולארסטפס בה אני משתף תמונות מיפן, תמונות עם אחותי מהוואי וכו׳. זה כמובן לא הספיק כהוכחה שאני בסך הכל תייר, אז נאלצתי גם לשלוף שיחת ווטסאפ עם גרמנייה אחת שתכננתי לבקר במהלך הטיול ולהראות את הכרטיסים שלנו לבלט בנירנברג בעוד שבועיים. לפחות טוב לדעת שהם נוקטים בצעדים נגד הגירה.</p><p>מכשול הבא בתור: ״סליחה, אתם יודעים אולי איפה המזוודות של טיסה מספר ככה וככה שיצאה מניו-יורק?״</p><p>אז אחרי כמה שעות בנמל התעופה יצאתי עם תיק על הגב ועם הבטחה שהמזוודה שלי תגיע אליי תוך יומיים מקסימום, ואם לא אז הנה מס׳ טלפון שאוכל להתקשר אליו בתקווה שגם יענו לי בצד השני. איחלתי למזוודה בהצלחה.</p><p>בסרטון הראשון: נחיתה שהרגישה כמו ירידה ברכבת הרים (הסרטון רץ על מהירות x4).</p><p>בסרטון השני: יום אחד אני גם אעלה על החלקרח שכזה.</p><p>בסרטון השלישי: ג׳אם באמסטרדם… שהיה קצת דרדל׳ה; למעשה, החיפוש הכושל שלי אחר ג׳אמים ב-3 יבשות גרם לי להעריך הרבה יותר את תרבות המוזיקה אצלנו בארץ.</p><p>בתמונה הבאה: ההוסטל הנוכחי שלי שנקרא ״החזיר המעופף״ והכל שם בנושא של… חזירים. במלון הרבה חבר׳ה צעירים, התחברתי שם לחבורה של גאורגים ולאחר מכן יצאתי עם שני אמריקאים יהודים ששמעו שאני מישראל לבר שבו צולם הג׳אם ע״י אחד מהם.</p><p>בתמונה האחרונה: סעודה נפאלית.</p>`,
              id: 67
            },
            {
              date: 'January 3, 2025',
              degrees: '5°',
              name: 'Rijksmuseum 🖼️',
              shortName: 'Rijksmuseum',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8926EECA-B580-4AA4-9C0D-70353AFF55D1_FEBE0594-ED3B-4862-9027-69A7D94E41A6.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C5C39293-D462-41A5-9E80-94FCB7EF490D_B933A650-8D1D-4545-9D8A-D595566AA115.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1F60135C-B530-4E12-8247-EF44BB340E34_4557186F-BC47-4C53-A2D2-28CF3A7B9986.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D39313A4-D9E1-456F-97E7-BEDCEAFD2708_36667710-03EF-4BDB-9C01-BA3513847DD7.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3099CCEA-8E45-47D8-A5BC-72AAB587591C_DC9DDC7D-9CC4-40EC-A8F6-BE5AB582B100.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2FE798C4-68B8-4C79-ADDE-EF5E9C7393A7_428FD48C-A837-47EA-BA13-ADA27D523F61.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/F32AE719-A40C-4FC8-96EE-A03946D79763_DB670946-2A78-4CCC-9576-CBDC416AB11A.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/F90A2339-6EC8-44D2-8FC2-BF19B26E427D_36C3E2A4-A2AE-4FA9-A212-B5937FE99CF3.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D80819A3-5B2E-499C-8B87-C6486F9DD295_AEB97E54-6FB8-4852-A8F6-976B16C29DB0.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/538C416F-C2AF-429E-9558-A11710B62AFB_FC5DA59B-1EF2-496A-B318-6E4D68C24D7F.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/fadcccbf-8bf8-4602-8b60-68daa274a090_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/CA2A1026-2DD1-4CB0-97BC-D3C2B9CBB4EE_FE767CC7-EE2C-4C33-91A8-2171D786560F.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/91775020-2855-42AC-B6A6-4388977C6853_D8E81543-F6BD-409E-A66D-8AFA78DAA9E3.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/784BA7CB-757E-44EB-BF84-3AEBC3EF08A8_2E949639-B8A5-4839-B143-23AE9E4F414E.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/485182BA-513B-4D41-AEED-9E73CBEBC4F6_45AA8156-1792-4376-B2E2-FBBE361B0905.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/e5551df7-fc32-4c96-b39e-e056c76f0293_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/EF1D6B1A-5D30-4A35-9D6B-7A9D69FF0E51_0ADF5481-6A81-4147-A5B1-52032F4C4DB6.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5175315A-59C4-4B34-9CC9-8CACBB9765CE_2CD6FBE4-56EA-45E0-914D-5848B9CE6DE6.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/D39313A4-D9E1-456F-97E7-BEDCEAFD2708_36667710-03EF-4BDB-9C01-BA3513847DD7.jpg',
              description: `<p>לא העליתי פוסט על אתמול כי אין יותר מדי מה לספר (התעוררתי מאוחר, הסתובבתי בעיר, אכלתי אוכל טוב, ראיתי נופים יפים, ובערב אפילו התאחדתי עם המזוודה שלי שהגיעה עד אליי למלון).</p><p>היום בבוקר הלכתי ל-Rijksmuseum, או בעברית ״המוזיאון הלאומי״ שנמצא באמסטרדם. אני אתאר את היצירות הנבחרות שהחלטתי לשתף, אבל אני מתריע מראש - אני הולך לכתוב הרבה שטויות בתיאורים שלי.</p><p>תמונה #1: פריט האמנות היחיד מימי הביניים שלא מופיע בו ישו.</p><p>תמונה #2: שטיח פרסי עם סמל הוגוורטס במרכזו.</p><p>תמונה #3: שניים-עשר השבטים.</p><p>תמונה #4: אני לא יודע, אבל אם הייתי רואה את זה בגיל 6 זה כנראה היה עושה לי סיוטים.</p><p>תמונה #5: הכתר של המלך נפטון.</p><p>תמונה #6: שודדי הקאריביים 3, אילוסטרציה מוקדמת.</p><p>תמונה #7: לנין.</p><p>תמונה #8: באזור של האמנות המודרנית, כל פריט אמנות היה יותר מגוחך מהשני… אז צילמתי את השני. אגב, לפריט האמנות הזה אין שם.</p><p>תמונה #9: אוקיי, זה כבר מגניב מכדי שאשווה אותו לשודדי הקאריביים.</p><p>סרטון #10: ציורים תלת מימדיים (בערך).</p><p>תמונה #11: טרומבון (ולידו עוד כלים).</p><p>תמונה #12: מי יודע איך קוראים לכלי הזה? (לא פסנתר).</p><p>תמונה #13: כל מי ששיחק משחקי מחשב יודע שבאחת התיבות האלו מסתתרים משככי כאבים.</p><p>סרטון #14: נגן רחוב מחוץ למוזיאון. מי מזהה את היצירה?</p><p>תמונה #15: ❤️</p><p>בצהריים עליתי על רכבת ונסעתי להאג, עיר שידועה באהדתה כלפי ישראלים. ולמה דווקא האג? כי שם תכננתי לפגוש את לרה וגיא, זוג ישראלים שעבר להולנד לפני כ-3 שנים. בעצם, מעולם לא פגשתי את לרה וגיא - אבל דיברתי עם לרה רבות בנושאים שקשורים לתואר במדעי המחשב, שכן אני מכיר אותה מהתואר באוניברסיטה הפתוחה, וניצלתי את הביקור שלי בהולנד כדי להגיד שלום פנים אל פנים אחרי כל השעות של השיחות הטלפוניות שלנו :)</p>`,
              id: 68
            },
            {
              date: 'January 4, 2025',
              degrees: '4°',
              name: 'Gouda',
              shortName: 'Gouda',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/90DA35B4-BBB2-400F-8C6D-AD89D52402B1_B3BF4064-4997-48B5-BF60-137A496C2196.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5A678391-E08F-4774-9FAE-72EA3F728A6F_D14ECDEB-2594-477E-BB3E-95D5401C3AAE.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/42A30CC6-DF05-4AA3-B018-71131921C753_FF4D3E33-9C50-4C3E-AE15-FC528B650A5D.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5A678391-E08F-4774-9FAE-72EA3F728A6F_D14ECDEB-2594-477E-BB3E-95D5401C3AAE.jpg',
              description: `<p>היום יצאתי ליום בילוי עם לרה וגיא. פגשתי אותם בתחנת הרכבת הקרובה לביתם (שלא רחוק מהאג), שם הם חיכו לי עם שלושה זוגות אופניים, איתם עלינו על רכבת אחרת והתחלנו לטייל בגאוד- אה… חאודה.</p><p>אז מסתבר שההולנדים מבטאים את האות g כמו ח׳ שלנו (רוב הזמן), ולכן העיר שהגעתי אליה אתמול היא בעצם האח, והעיר שאני מבקר בה היום היא העיר שממנה הגיעה הגבינה המפורסמת - גבינת חאודה.</p><p>היה מאוד נחמד לטייל על האופניים. הולנד כידוע היא מדינה שטוחה ומאוד ידידותית לרוכבי אופניים מבחינת שבילים ורמזורים, אז יכולנו לרכב בנחת ולדבר תוך כדי על הא ועל דא. באיזשהו שלב הגענו לאגם שעל גדותיו בתים פרטיים קטנים ומרבדי ענק של טבע ירוק בכל כיוון שאליו מסתכלים 🌱</p>`,
              id: 69
            },
            {
              date: 'January 5, 2025',
              degrees: '12°',
              name: '🍄‍🟫 Wunderland 🍄',
              shortName: 'Wunderland',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/460D3B8A-8BE8-460F-8D3A-A0CBFAC4E4CC_A187FEC9-506E-47FC-964F-653382EF1940.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/C22AC7FA-03BB-4C33-8A89-4D1DAF4AE7EB_85CECA4E-B3A5-47F4-97C7-43CC746DE9AA.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/460D3B8A-8BE8-460F-8D3A-A0CBFAC4E4CC_A187FEC9-506E-47FC-964F-653382EF1940.jpg',
              description: `<p>עתה אני הולך לספר על הטריפ הראשון שלי עם פטריות הזייה.</p><p>למה?</p><p>כי אני חושב שזה חשוב לשתף חוויות, גם כאלו. כי בתי הספר אומרים ״אל תעשו את זה, זה רע״ אבל לא מסבירים מה רע בזה. כי אני מאמין שלמרות שאני יודע שיש בזה רע - יש לי מספיק כוח רצון כדי להתמודד איתו ולהפוך את החוויה לאחת ששווה לשתף. אני יודע שיש בזה רע כי לפני פחות מחודש הלכתי לבקר קבר של אחד שנפל לרוע הזה. ואחרון חביב, אני משתף כי אני מאמין שקהל הקוראים שלי, עד הצעירה שבהם, מספיק בוגר כדי להכיל ולהבין חוויה שכזו, ואולי אפילו ללמוד ממנה. אני אגב מכיל את עצמי ב-״קהל הקוראים שלי״, או לפחות את עצמי העתידי.</p><p>איך?</p><p>די בקלות. חנויות מוכרות את זה באופן חופשי ובלי חשש, לרבות בלי חשש לשתף איך נכון ואיך לא נכון לצרוך את החומר הזה, ומכווינות את המשתמשים לצרוך את החומר באופן הנכון. הוסבר לי לאכול ארוחת בוקר, לחכות שעתיים, לשתות הרבה מים, ורק אז לאכול את הפטריות. נאמר לי שעדיף לעשות את זה ביום ולא בלילה כדי שלא לחטוף חוויה קלאסטרופובית ורעה. נאמר גם שעדיף בטבע, ואם אפשר בסביבת אנשים שאני בוטח בהם.</p><p>איפה?</p><p>במלון, ולבד. אחרי ארוחת הבוקר הלכתי להסתובב בחוץ, עם שני פארקי טבע גדולים כיעד אפשרי… אבל היה גשום מכדי שמישהו ירשה לעצמו לשבת בגשם הזה, לכל מטרה באשר היא. לבד כי כמובן אני לא מכיר פה אף אחד, ואולי כי אני מתבייש להוות נטל על מישהו במידה ואכן אחווה חוויה רעה.</p><p>אז מה הלך שם?</p><p>ירדתי למרתף של המלון, שם נמצא חדר קולנוע גדול וריק מאדם. הפעלתי את ״שר הטבעות 3״ כסרט שראוי שאחווה לצליליו חוויה שכזו, ואכלתי את הפטריות (טעם מגעיל אגב).</p><p>אגיד כבר עכשיו שהחוויה לא… מרטיטה במיוחד. לא הייתי בעולם אחר, ולא הפכתי לבן אדם אחר. זה היה די עדין. בתור התחלה הרגשתי את הלב שלי דופק. ואז הרגשתי את כל הגוף שלי, חסר ניחוחות מעט. הרגשתי את הגב שלי כואב. הסתכלתי על המסך שעליו רץ הסרט ושמתי לב שאני מבחין יותר בצבעים, צלילים, תווי פנים… הבנתי שאני פשוט מרגיש יותר. כל החושים שלי הפכו לחדים יותר, וכל הרגשות שלי הפכו לעזים יותר. בכיתי בסרט במקומות שיש לבכות בהם, וצחקתי במקומות שיש לצחוק בהם.</p><p>באיזשהו שלב הסרט נגמר, החדר נהיה חשוך, ואני הרגשתי… בודד. אז עליתי לבר של המלון, וביקשתי מהברמן להפעיל שיר כדי שאוכל לנגן לצליליו על הגיטרה של המלון. השיר היה Under The Bridge של הצ׳ילי פפרס, שיר שמדבר על בדידות וריקנות. קיוויתי שמוזיקה תעזור לי ליצור קשרים עם אנשים, כמו שהיא לפעמים עושה, אבל… שני האנשים היחידים שהיו על הבר היו שקועים במסכים שלהם, מקשיבים לצלילים מהאזניות שלהם, והברמן, על אף היותו ידידותי, גם הוא לא הביע חברתיות מסוימת… אז לקחתי את האזניות שלי ויצאתי החוצה לגשם. בהתאם לקו מחשבה שמנחה אותי כבר שנים, ידעתי שברגעים של חוסר וודאות אני אעדיף לצאת אל הלא נודע, גם אם לא מחכה לי שם כלום למעט גשם וקור… כי זה עדיף על לשכב במיטה בחוסר מעש ותכלית.</p><p>אז יצאתי החוצה.</p><p>ועדיין הרגשתי בדידות, אז שמתי לעצמי באזניות שירים שנהגתי לשמוע כשהייתי בודד. בעודי כותב את המילים האלו, אני זוכר שהייתי מאוד נוכח ברגע. הייתי מאוד חי. והרגשת הבדידות שלי הלכה והתגברה, וכאבה, ולא הפסיקה לכאוב. ידעתי שאני יכול להתקשר למשפחה ולחברים בכל רגע, וידעתי שהם יהיו לצידי, אבל… את הבדידות שאני מרגיש אי אפשר לרפא ע״י שיחת טלפון וגם לא ע״י שיחת וידאו. אז הלכתי בגשם, והזכרתי לעצמי את הכוח הכי חזק שלי; מדובר ביכולת שטיפחתי בכוחות עצמי והוכיחה את עצמה כיעילה ברגעי משבר, יעילה ביכולתה להוביל אותי קדימה במובן הנפשי וגם הפיזי של המילה - מדובר בכוח הרצון שלי. זו היכולת שפיתחתי כשרגשות לא היו לטובתי, אמונה לא הייתה בליבי, תכלית לא הייתה בעיניי ושום סיבה אחרת להמשיך לא עלתה בראשי - כוח הרצון שלי הוא זה שהוביל אותי קדימה והיווה תחליף ראוי לכל אלו שהיו חסרים לי.</p><p>ואז הרגשתי רגש חדש עולה בי - אומץ. אני חושב שזה רגש שלא הרגשתי במשך הרבה שנים, ואחד שמעולם לא ראיתי בו צורך רב. אבל אני הייתי רטוב ובוכה ופתאום כוח הרצון שלי כבר לא היה הדבר היחיד שהוביל אותי קדימה - הייתה בי הרגשת אומץ שחיזקה אותי והייתה לי סיבה להמשיך במסע שלי. היה נחמד לשם שינוי להיתמך ברגש ולא רק ברציונל כסיבה לעשות את כל מה שאני עושה בחיים. לא הייתי חייב להיות פה, יכולתי להישאר במלון, איפה שחמים ונעים. יכולתי להישאר בחדרה, איפה שהבית נמצא והמשפחה נמצאת. אבל אני בן אדם, ובני אדם הם יצורים הרפתקניים (ולעיתים גם אמיצים), וחיפשתי לחוות הרפתקאות, חיפשתי לדעת דברים שאני לא יודע שאני לא יודע על קיומם; מהסיבה הזו יצאתי מחדרה, מהסיבה הזו יצאתי מהמלון, ומהסיבה הזו מצאתי בעצמי פתאום אומץ ששכחתי (או לא הייתי מודע) מקיומו.</p><p>והמחשבה הזו על המשפחה החדירה בי תחושת געגוע. ראיתי ברחוב חדר כושר מבעד לזכוכית, ובקומה מעליו ראיתי קיר טיפוס, ונזכרתי בבילוי האחרון שלי עם אחותי בישראל לפני שהיא יצאה למסע שלה להוואי… היא לקחה אותי לקיר טיפוס. והתגעגעתי אליה. ורציתי להגיד לה שאני אוהב אותה. אולי הייתי צריך. אבל ידעתי שזה יהיה מוזר להסביר את כל החוויה שמתפרשת כבר על פסקאות ארוכות ב-״אני אוהב אותך״ אחד קצר ומהול בבכי, אז… המשכתי ללכת.</p><p>וכל הרגשות האלו כבר נהיו עזים מדי לבן אדם רגיש ופשוט, בן אדם שלא רגיל כל כך להרגיש ביומיום… החוויה הזו נמשכה יותר מדי זמן, והחלטתי לחפש מפלט. חשבתי שאמצא אותו בארוחה, אז נכנסתי למסעדת בשרים מקסיקנית. האוכל, באופן מפליא מצד אחד אך רגיל מצד שני, היה חסר טעם. הטעם המר והדשאי של הגשם שנשטף עליי ייזכר בראשי יותר מהטעם של הבשר שאכלתי. אבל החוויה לא הייתה חסרת טעם. ראיתי פרצופים במסעדה, וראיתי משפחה של אב, אם וילדה כבת 10. הם נראו קצת כמו אלפים (בני לילית 🧝‍♂️) בעיניי, ולא פחות, הם נראו מאושרים. באיזשהו שלב האם סיפרה למלצרית שהם טסים מחר ללונדון לחגוג יום הולדת לבת שלהם, וכמה דק׳ אחרי זה נשמעו במסעדה צלילי שיר יום הולדת עם המילים ״סנה חילווה יא ג׳מיל״. אה… מסעדה מקסיקנית אמרתי? ״סנה חילווה״? שיהיה. לשמחה אין שפה.</p><p>יצאתי מהמסעדה והחשתי פעמיי לכיוון המלון. צדקתי; המסעדה אכן היוותה מפלט עבור הרגשות העזים שלי, ועתה הכל נהיה מעט יותר רגוע, שליו, ובר נשיאה עבורי. חזרתי למלון, והתחלתי לכתוב את המילים שאתם קוראים כרגע, בתקווה לשמר את החוויה באופן הכי טוב שאצליח. החוויה עצמה עדיין לא הסתיימה - עדיין מצאתי את עצמי בוכה כשכתבתי על הבדידות, על הגעגועים למשפחה ולאחותי, וגם עכשיו… מי יודע, אולי החוויה עוד תמשיך ואכתוב עליה יותר בפוסט הבא. כך או כך, רציתי לשמר את הזיכרון על כתב כל עוד הוא טרי, ורציתי לשתף את החוויה עם אנשים שאוהבים אותי ומתעניינים בחוויות שלי, ובפרט עם עצמי.</p><p>נתראה בפוסט הבא (או הקודם, כי בעצם יש לי עוד איזה יומיים שלושה של חוויות להשלים ולספר עליהם).</p><p>❤️</p>`,
              id: 70
            },
            {
              date: 'January 6, 2025',
              degrees: '12°',
              name: 'Utrecht',
              shortName: 'Utrecht',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/11429ac0-fca0-4c79-9a71-10d29d0c4f48_43fb46f5-d970-4b6f-8b5b-94a62b2f87db.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/eab88128-78c0-44c0-8c14-c1de2a628163_69848fec-5c72-42eb-ad1a-1e578ac808c2.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/516caef6-c5a6-45ec-a418-4799a1a523f9_ae13e187-b4c8-466f-868b-d2ebb76a285c.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/c0925af7-d886-4cab-9158-eeb4248fe654_3d99ebfa-d985-4d9b-b4ea-2386bfd13545.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/2f1eee4c-bac7-4869-9f7a-287f1ae9731a_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/78f85022-f96d-4fd9-873c-fc7ff122c8a5_94cf0a39-d0a3-4cfe-8723-a5e1c5493a9f.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/fe1aa8fb-db71-41bb-8f6b-e68201e47b0e_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/dfec5d83-45e6-4dfc-b13a-2299e63438b7_dd9e74f4-610f-4629-9e34-2a814f89ac24.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/754a7b43-207f-454b-9165-1225e633ae96_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1030c989-eb41-483b-a1a4-d08eea796cc4_24373513-34fd-4e38-b7f6-410f609a6399.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/3d28360f-a4ac-4748-9c85-07738650f554_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3bbd294e-02de-4563-8e9b-8fd70d389f60_1fa20766-f9fc-4b61-80d1-be1122c54c83.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/05207caf-2164-44b3-a718-b37f92ffe6de_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/97427a82-1bdc-42cf-9115-e33321d961e4_9d701c19-35e9-4889-8444-07dda72874e8.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/c294adc8-d5d0-48f8-8a06-38278695f452_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/188e1b34-6e09-4324-b8f7-c714e2ec0139_1077f105-6a6e-45da-8f61-f2f4f97b9515.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/11429ac0-fca0-4c79-9a71-10d29d0c4f48_43fb46f5-d970-4b6f-8b5b-94a62b2f87db.jpg',
              description: `<p>אחרי האג המשכתי לעיר מרכזית בהולנד בשם אוטרכט, אשר הומלץ לי להגיע אליה ע״י הולנדי שהכרתי ביפן. הייתי שם במשך ארבעה ימים, וכל יום נראה למעשה אותו דבר: קמתי מאוחר, הסתובבתי במהלך היום בין מסעדות וחנויות, ובערב מצאתי ברים מוזיקליים לצאת אליהם. באוטרכט מצאתי ב ד י ו ק את הג׳אמים שחיפשתי במהלך כל הטיול הזה; כל יום היה ג׳אם אחר בפאב אחר, וזה היה די נפלא.</p><p>אגב, מה הכוונה ״בדיוק הג׳אמים שחיפשתי״? מה ג׳אם פה שונה מג׳אם באמסטרדם או בניו-יורק? טוב ששאלתם. התשובה היא הספונטניות, העובדה שהנגנים לא מכירים אחד את השני, ובונים ביחד משהו בזמן אמת בלי לתכנן מראש. באמסטרדם וגם בניו יורק זה לא היה ככה; עליתי לנגן עם להקה שהגיעה מוכנה מראש, הגיטריסט אמר ״אלו האקורדים״, ו… זה די משעמם ככה. אובד כל הרעיון של הספונטניות והאלתור בזמן אמת. אז נחמד שפה באוטרכט שוב מצאתי את זה :)</p><p>העליתי סרטונים מכל ארבעת הימים האלו; ברובם לא רואים אותי מנגן כי למען האמת לא הצלחתי להתחבר יותר מדי לאנשים (ולא רציתי לדחוף מצלמה לידיים של בחור זר ולהגיד ״צלם אותי בבקשה״), אבל סמכו עליי שהיה לוהט - והתמונה האחרונה די מוכיחה את זה (למי שלא מכיר, זה מה שקורה מנגינה על בס במשך שעות).</p><p>קטע מוזר בהולנד - לא הצלחתי כל כך להכיר הולנדים. אולי כי הייתי במקומות תיירותיים, אולי כי ההולנדים ביישנים, ואולי כי המדינה מפוצצת מדי באנשים שאינם הולנדים… אנא אערף.</p>`,
              id: 71
            },
            {
              date: 'January 10, 2025',
              degrees: '4°',
              name: 'Eindhoven',
              shortName: 'Eindhoven',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/85127220-346e-410d-92b7-d8c495ce2a58_202f34ac-4d7c-4d6e-84e2-09ffd9f4442f.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/ebc5f0eb-f382-4084-9982-ce094268106c_fe81327e-80bd-418b-ab19-fb16da1ee4c5.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1ef5b662-77af-4a7a-9d69-31f3abc42690_1b02697c-a09a-4436-bf9c-b7973b02b990.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/88b9368d-4855-48b9-82c0-4dcfb88e1e54_013a5115-af38-42c8-9bb5-64fb61140efe.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/f51f565f-b5f5-4596-9c8a-7604ec578124_a23e04c1-feab-44b8-8dd4-fb5852873e01.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8ba37d4d-e29e-44a8-9e86-7b2fc60d638c_3013b3f3-ff27-4353-88f2-464880751961.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7b7a6249-83a2-44d1-b693-a2feb792c59d_6986866e-5e31-459a-9e25-7d93f48bf209.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1239a8a8-fbb3-4a23-950a-c8dabe89d676_a87453b4-7cc0-4f28-9558-23278440eb51.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/d1f86259-3b42-453b-bbe3-55a710341716_4e7468da-7956-4087-96df-5fa8f92c8229.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/68e457fe-90ad-44da-99e6-8136695c5378_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8889c830-26b1-4ca8-a4fd-e7a876dd424a_521d105b-56ce-4b64-a216-ae0c2e1e429d.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/cfe777f0-3b24-4db0-8f6b-22bbf03b11f1_e42e0e43-a58a-45a2-9505-3d1300a3c73e.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/b44386c5-96fb-4fb8-9179-d8c7e782096d_12ffe54d-d414-4b3d-9b17-ae505b8da1cf.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/cfe777f0-3b24-4db0-8f6b-22bbf03b11f1_e42e0e43-a58a-45a2-9505-3d1300a3c73e.jpg',
              description: `<p>אחרי אוטרכט המשכתי לאיינדהובן, מעין יקנעם של הולנד, כדי לפגוש שם את מייק - חבר שאני מכיר ממשחקי מחשב ומעולם לא פגשתי פנים מול פנים, אשר גר בעיירה לא רחוקה מאיינדהובן.</p><p>מייק הראה לי קצת את העיר, דיברנו הרבה, הלכנו הרבה, ואכלנו הרבה אוכל מקומי. בתמונה השנייה ניתן לראות קונספט מעניין - מדובר במעין שוק אוכל אשר מלא מסביב בדוכנים של מוכרי מזון שונים, ובמרכז יש הרבה מקומות ישיבה. היופי הוא שלא צריך לגשת לדוכן כדי להזמין אוכל - פשוט מתיישבים באחד השולחנות, סורקים קוד QR עם הטלפון, מזמינים את המנות שאנחנו רוצים מהדוכנים שאנחנו רוצים (בדגש על ״דוכנים״ ולא ״דוכן״), והאוכל כבר יגיע אלינו מעצמו ע״י המלצרים של כל דוכן.</p><p>בתמונה האחרונה: הסיבה האמיתית להגעתי להולנד.</p>`,
              id: 72
            }
          ]
        },
        {
          name: 'Germany',
          bgImage: deflag,
          steps: [
            {
              date: 'January 13, 2025',
              degrees: '0°',
              name: 'Nürnberg',
              shortName: 'Nürnberg',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/f8d27da7-527a-46aa-b044-a14d49f52bad_790ce635-3f02-40e0-8f2a-8b6cdcfde3cd.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/e4918cee-bfda-41d0-ba55-3ae2bdacd2b6_824b45ec-23e2-4fda-ac4e-d37717e6d50b.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/1b311d8d-54b5-4ab8-bc7d-1aae0ee2b4da_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/a9178a6b-7d5b-4c1b-944a-9e4bbb604a10_03e9e742-00bf-4c80-a639-f4cba135c393.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/81824b4b-6d30-4d8f-8a2d-ec2d94a439d3_88b064f0-cb47-47aa-917e-7ed81314294e.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/41098d10-089c-4a8a-ad86-367f9d25ea1d_d03db8ca-7bbc-4d6e-878a-894e5dc5e9c2.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/f8d27da7-527a-46aa-b044-a14d49f52bad_790ce635-3f02-40e0-8f2a-8b6cdcfde3cd.jpg',
              description: `<p>מאיינדהובן בהולנד המשכתי בנסיעה של 8 שעות לנירנברג בגרמניה, העיר שהייתי בה הכי הרבה פעמים בחיי בחו״ל (הפעם הנוכחית היא הרביעית). הסיבה לחזרתי לעיר הזו היא הקשרים שיצרתי כאן - הגעתי לעיר פעם ראשונה ב-2017 מטעם חילופי תזמורות של חדרה עם נירנברג, וחלק מהקשרים שיצרתי באותה תקופה מחזיקים עד היום, אז כמובן שאקפוץ לבקר אותם מדי כמה שנים :)</p><p>בעיר הזו אני אשהה במשך 6 לילות, רובם אצל רודולף והייקה - זוג מבוגרים מוזיקאים אשר לנתי אצלם בפעם הראשונה בהיותי בנירנברג (מטעם חילופי התזמורות). רודולף היה המנהל של קונסרבטוריון הנוער העירוני שלהם, אך יצא לגמלאות לפני כ-5 שנים, וכיום מעט מלמד צ׳לו ומעט מדריך תיירים (בעיקר גרמנים) בעיר.</p><p>ביומיים הראשונים יצאתי למרכז העיר, הסתובבתי בין חנויות המוזיקה הענקיות שלהם שהכרתי כבר בפעמים הקודמות כאן (ועדיין נחמד להגיע כל כמה שנים מחדש), אכלתי אוכל מקומי אשר מורכב מנקניקיות בווארייניות, שניצל ממולא גבינה וחזיר, חזרת לבנה, ושלל מנות עיקריות ותוספות במגוון צבעים וטעמים… כל זה כמובן לצד בירה חיטה גרמנית, סוג הבירה האהוב עליי (שהיה פחות נפוץ ביפן וארה״ב).</p><p>ביום הראשון פגשתי את איזי (קיצור של כריסטיאנה כמובן), זמרת מקהלה שהכרתי בפעם השנייה שלי בנירנברג ונשארנו בקשר עד היום. אכלנו ארוחת ערב ביחד, ויומיים לאחר מכן יצאנו ביחד לבלט הראשון שראיתי בחיי - ״אגם הברבורים״, בליווי תזמורת חיה. היה די מדהים.</p><p>הטמפרטורה פה נעה בין מינוס 10 לבין 5 מעלות צלזיוס, ואמנם לא יורד שלג, אך יצא לי לחוות מדרכה קפואה וחלקלקה, כביש קפוא שמונע נסיעה של מכוניות עליו, רכיבה על אופניים בקור שהבהיר לי למה רודולף אמר שבלי ציוד מיוחד לא מומלץ לרכב על אופניים בחורף, ובגדול באיזשהו שלב הפסקתי לספור את כמות שכבות הבגדים שאני לובש והחלטתי שכמה שיותר, יותר טוב.</p><p>בתמונה השלישית: חלילים על קרטון ביצים.</p>`,
              id: 73
            },
            {
              date: 'January 16, 2025',
              degrees: '6°',
              name: 'Nürnberg #2.5',
              shortName: 'Nürnberg',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8f61a5a1-f43d-4592-a080-5b629576b720_44a76d05-b5b2-4474-a6ce-d555672c0b25.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/ae6e8411-a065-447e-967a-0aa54b0e78c2_18f7d7a6-1117-4092-972c-21baed79946c.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8af2e632-663d-4186-92e6-bae0bbc7fb11_b6dd16c8-03c3-4e39-b7fa-156dfec766d6.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/e014a5eb-8544-462a-831e-075b23ff84a7_08e542b7-ddc5-4b16-8eb7-ba75c25ee32c.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/74a00e90-fc05-4093-b156-3bf8ca5fa1e3_52b991c5-896c-4d79-90b8-8c2375177055.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/136f52a0-9afd-4162-bfd6-a2c9809c0a6a_96140f90-6367-49cf-bfb3-96163e2c23b1.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/97fe8e6f-0081-46e8-a403-c9a6aef310d9_83c6afda-0aa1-4b3a-a8a6-366865b6c4aa.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/808e421b-367e-4f0e-8ddd-6caa545c3eb9_992ab39b-3c8d-4310-8449-6cf30ec702f7.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/75255d38-bdbf-497e-b473-dc9d20a91833_abef3480-51e6-4648-af95-59e0dbfa5956.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/20f7a972-dee3-4f75-98f2-3e4d8dc134b1_d222a3e0-00e8-4dfc-abdf-5ab2d908a626.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5aeb5aa1-7728-40bd-92fb-87b877878e3a_2ca0669c-7518-4f5e-8d0d-048331b2734e.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8af2e632-663d-4186-92e6-bae0bbc7fb11_b6dd16c8-03c3-4e39-b7fa-156dfec766d6.jpg',
              description: `<p>בתמונה הראשונה: הנוף מחלון חדרי הבוקר.</p><p>רודולף אומר שיש לי מזל, כי רק פעם בכמה שבועות רואים שמש כזו אצלם בחורף (זה לא אומר שחם, אבל לפחות מואר ויפה). יצאתי לטייל לאורך תעלת המים שלהם לכיוון סידורים שהיו לי בעיר; בדרך עצרתי בסופר לקנות לעצמי אוכל, וראיתי שהם מוכרים… סופגניות? כן, מסתבר שסופגניות (טעמתי רק כדי לוודא) זה מאכל נפוץ אצלם, עם שם אחר כמובן וללא כל קשר לחג יהודי כזה או אחר.</p><p>אחה״צ רודולף עשה לי סיור בעיר העתיקה וסיפר לי על ההיסטוריה של היהודים בנירנברג. אחד הדברים המעניינים שהוא סיפר לי מופיע בתמונה השלישית מהסוף. מדובר בתצלום של האזור הכי קדוש בכנסייה שמופיעה בתמונה הרביעית מהסוף. מי שם לב מה מסתתר שם בנוף?</p><p>בערב עלינו למסעדה שנמצאת על גג גבוה של בית מלון מרכזי בעיר העתיקה, ומהמרפסת שלו ניתן לראות את כל העיר פרוסה למרגלותינו (שתי התמונות האחרונות). רודולף אומר שביום בהיר ניתן לראות משם את החרמון.</p><p>בתמונה השנייה מהסוף: הארובות של חדרה.</p><p>———</p><p>התשובה הברורה לשאלה ״מה מסתתר באזור הכי קדוש בכנסייה״ היא מגן דוד על הרצפה; אבל התשובה הפחות מובנת מאליה היא הגליל הזהוב שמאחוריו (ממש מתחת לישו הצלוב), אשר מהווה את ״קודש-הקודשים״ של הכנסייה, וצורתו לקוחה מ… צורתו של ספר תורה. לפי רודולף, מדובר בעוד מחווה והכרה בתורת היהודים.</p>`,
              id: 74
            },
            {
              date: 'January 18, 2025',
              degrees: '6°',
              name: 'Nürnberg #3⅓',
              shortName: 'Nürnberg',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/85059e4f-1042-44ff-962d-149dee82e716_608b4b4c-b320-4671-9c84-7df3f627e81a.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/c1b016fe-2cac-42de-abf7-6b7aa54f9bb8_5bea9a39-5c64-49e3-b7f0-a7ad390ad37d.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/ce44af54-b62a-4754-8108-285028dfcac6_8b6fd84e-214d-417f-9bb8-a7584a8b9c86.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/ff2cbf38-3e5d-4af5-88a0-b8b1be332596_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/72752df3-9554-48e4-a74c-3e7b641f19a4_cf2e952d-27a1-4ad7-a6ef-b05ee4335bfb.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7d71d13f-a688-4faa-abca-1b869ccea805_6a183b93-05e8-497d-ae3a-86fde9849f1b.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3781ff31-f1d3-40c2-b655-48ea435203cb_da1aa4c6-7f53-462a-a530-7bba46f6dbcb.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/677bc8ba-9443-47bc-b131-cb0f1faf8556_5f7f93b6-ab1a-4608-9323-629e22030e28.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/d1f87d5e-eb88-432e-b0ee-e2a3b0c0baaa_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/33804cb9-2a08-411a-a169-c4990883c579_0f3a234e-5a28-4a30-9b36-e02bef29f565.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/72752df3-9554-48e4-a74c-3e7b641f19a4_cf2e952d-27a1-4ad7-a6ef-b05ee4335bfb.jpg',
              description: `<p>להלן חוויות נוספות מימיי בנירנברג:</p><p>תמונה #1: אמנם לא יורד שלג, אך הטמפ׳ היא מתחת לאפס, ולכן יש צורך לגרד את הקרח מהשמשה לפני שמתחילים לנסוע בבוקר.</p><p>תמונה #2: עוד תעלת מים בנירנברג, אבל הפעם - מים קפואים.</p><p>סרטון #3: מסתבר שהמים קפואים רק בחלק העליון שלהם (כלומר מתחת לשכבת הקרח למעלה, המים זורמים כרגיל). ואיך גיליתי? כי באזורים שבהם יש הפרשי גבהים ונוצר מפל, שכבת הקרח נעלמת, המפל… נופל, ואחריו שכבת הקרח חוזרת כרגיל. יפה.</p><p>תמונות #4,5,6: עוד מהתעלה.</p><p>סרטון #7: בעת שהותי אצל רודולף והייקה, ניצלתי את הזמינות של הצ׳לי שלהם בבית (זה או שאני רושם ״צ׳לי״ או שאני רושם ״צ׳לואים״, תחליטו מה יותר גרוע), וניסיתי לנגן קצת. טוב, קצת הרבה. אחרי מעל 10 נסיונות הקלטה, החלטתי לחסוך מכם את הרעשים הנוראיים שנוצרים כשאני מנסה לנגן בצ׳לו עם קשת, ועברתי לנגן עם האצבעות (טיול הבא לנירנברג אני מבטיח להעלות הקלטה עם קשת).</p><p>תמונה #8: פתית.</p>`,
              id: 75
            },
            {
              date: 'January 19, 2025',
              degrees: '7°',
              name: 'Last day in Nürnberg 🇩🇪',
              shortName: 'Nürnberg',
              media: [
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4c913e61-eecc-4e1b-bde3-bd3fea8fd6f8_0aaf431b-6f3d-468c-ae81-bd0e95d2b5d5.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/f21b6e92-bc9a-48d4-9311-fe77b547de03_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/19bcb7fe-7d22-4060-b977-1fb526e3a553_06d9b082-c5c4-4e20-89d0-d5e52f28b7b6.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/9697dd18-53e5-4971-83c7-e44995eed0bc_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/aa8e4915-1abe-48d0-b352-a4dc4d827faa_d386fe12-9d62-4fc7-a285-43abb6f120a7.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/86ae1919-271f-491e-94ed-eb21c1f4e310_60197a6a-c861-4c1b-b6d5-be9129332dcd.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/dde50554-b803-45be-831f-63a58097732b_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/e9925148-200b-46ac-a593-8b6045a01036_e321611f-0409-45bc-95a3-7d5bf26257f8.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4c913e61-eecc-4e1b-bde3-bd3fea8fd6f8_0aaf431b-6f3d-468c-ae81-bd0e95d2b5d5.jpg',
              description: `<p>ביום ראשון היה מאורע גדול בכנסייה - החלפה של שליח הציבור שלהם (קנטור), מאורע שקרה פעם אחרונה לפני 20 שנה למיטב הבנתי. לפיכך, היו הרבה מקהלות שבאו לשיר שם, ובהן המקהלה שאיזי ואמא שלה שרות בה - אז כמובן שהגעתי לעודד. היה די מרשים - 5 מקהלות ששרות בו״ז, ביחד עם רוב באי בכנסייה (כלומר גם אנחנו שרנו במקומות מסוימים), בטוואי האקוסטי של הכנסייה הענקית הזו… כן, היה די מרשים.</p><p>אחרי הכנסייה (ואחרי שהתגנבתי למאחורי הקלעים וטעמתי מהיין והנשנושים שהוכנו לזמרי המקהלות) הוזמנתי לארוחת צהריים עם משפחת היסנר, המשפחה של איזי, אשר שהיתי אצלם בביקורי בנירנברג ב-2019. הם שמחו מאוד לראות אותי שוב, וכולנו שמחנו לשתף חוויות ולהשלים פערים של 6 שנים מאז פגישתנו האחרונה.</p><p>אחרי ארוחת הצהריים רצתי לכיוון אולם קונצרטים שבו התקיים קונצרט תלמידים וביניהם תלמידים של רודולף ושל הייקה. הצעירה ביותר שניגנה שם אגב הייתה בת 3 או 4. בסרטון האחרון: חמישיית בראס (מתוך הקונצרט כמובן).</p><p>אחרי הקונצרט חזרתי עם רודולף והייקה הביתה ומיד החשנו גלגלינו לכיוון עיירה לא רחוקה בה נמצא חבר של המשפחה שלהם, אספנו אותו והמשכנו ארבעתנו ביחד למסעדה באותה עיירה. ההתמחות העיקרית של המסעדה הזו היא דגי קרפיון, אז כמובן שלקחתי אחד (דג שלם מטוגן); הדג הרגיש כל כך טרי ועסיסי, שזה רק היה הגיוני אחר כך לראות בריכה מלאה דגי קרפיון ביציאה מהמסעדה.</p><p>למרות שהיום היה עמוס מאוד, העומס לא נפסק פה, כי אחרי חזרתנו הביתה, ארזתי את המזוודה שלי והתכוננתי לנסיעה הלילית שלי באוטובוס מנירנברג לוינה, אוסטריה.</p><p>———</p><p>נירנברג הייתה אחד היעדים העיקריים שלי בטיול הזה, שכן נמצאים פה אנשים (ואולי מוטב לומר חברים) שאני בקשר איתם כבר 8 שנים, ואשמח להמשיך לשמור איתם על קשר כל כמה שנים בעת ביקוריי באירופה. עם רודולף והייקה לצערי לא הספקתי להצטלם, אך בעת ביקורי בפראג הצלחתי לארגן שיחת וידאו בהפתעה איתם ועם מנהל תזמורת הנוער של חדרה (אשר ישנתי איתו אצלם בפעם הראשונה שלי בנירנברג ב-2017), וזו התמונה האחרונה ששיתפתי בפוסט הנוכחי.</p><p>על המנטליות בנירנברג אני יכול להגיד שהיא השתנתה בחמש השנים שלא הייתי פה. התורים המסודרים בתחנת הרכבת כבר אינם, ואנשים יותר מתנפלים על הקרונות מבלי לתת קודם לנוסעים לרדת; אנשים יושבים בקרונות עם רגליים פרושות על המושבים, מדברים בקול רם בטלפון, ובאופן כללי פחות מתחשבים בזולת; המעשנים נמצאים הרחק מפינות העישון (התחומות היטב), ולא פעם שמעתי מוזיקה בקולי קולות בוקעת מרמקולים ניידים אישיים במקומות ציבוריים; ו… כן, הרוב המוחלט של האנשים שעושים את המעשים שתיארתי פה הם מהגרים (או לפחות אנשים שלא נראים יותר מדי אירופיים באופן חיצוני). בדומה להולנד, הרחובות מלאים בגרפיטי (הרבה ממנו מדבר על אנרכיה ופשיזם), והשפה הערבית נוכחת הרבה יותר ממה שזכרתי, הן ממה ששמעתי והן ממה שראיתי ברחובות (שמות של מסעדות, שילוט וכו׳).</p><p>ממבט יותר מעניין, אני יכול לדמיין שיום אחד בעתיד, בספרי ההיסטוריה בבתי הספר יופיע פרק תחת הכותרת ״השפעת האיסלאם על אירופה״ ו/או ״קולות אנרכיה נשמעים באירופה״, ו… די מגניב לדעת שהייתי שם, הייתי עד פיזי וראיתי את השינויים האלו במו עיניי.</p>`,
              id: 76
            }
          ]
        },
        {
          name: 'Austria',
          bgImage: auflag,
          steps: [
            {
              date: 'January 20, 2025',
              degrees: '-2°',
              name: 'Vienna 🎻🇦🇹',
              shortName: 'Vienna',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/f8476ae7-b09e-4e72-a6b2-87c54d08b744_a5fece7a-d039-42a7-9629-0a5357535457.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9685714f-3fa3-4010-92b4-72e9ca7a6f13_68fa600d-de87-4d12-a9a9-11eaa2604df9.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/1e4cd745-1a81-4e65-865c-5298072667f4_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4408e800-5eb7-4036-bdca-fc09b21fd2b5_486ecc8e-676b-4d74-ad8f-672991d03850.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/034ce4ab-e0c8-4fb3-bd4c-898443a93807_398f62d3-152b-449d-9ac6-411ce3f32180.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9e70f838-e185-4af3-8ae5-6b76f7abcf17_41ff700a-8dd9-4e9d-888d-34846e76b8fe.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/a5ed9505-cb7d-4cfc-9293-3db86d13a8aa_22379d50-ebd7-43b2-a2f6-d1239024a1f6.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5231fc33-51c5-4cd2-8944-350ae91bb282_8944f6e0-c1a0-489c-b758-c7bcb12d1d31.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/07570821-170b-48c8-ad0a-4f60e23587e9_5d0c908d-b71c-483e-b25f-bfeaefe21493.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/bc3274c0-ffc2-4202-b7a4-b9d1d459d403_718102a0-578e-4107-9757-01a4d088d7c7.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4347e7b6-5433-49e5-b958-fc85426e1dea_c0b6bb49-0449-4779-b8d0-3f5c8586bd7b.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/07570821-170b-48c8-ad0a-4f60e23587e9_5d0c908d-b71c-483e-b25f-bfeaefe21493.jpg',
              description: `<p>שלגגגגגגגגגגגגגגגגגגגגג</p><p>אה, זאת אומרת… יורד בוינה שלג, ואני שם ⛄️🌨️❄️.</p><p>הגעתי בבוקר למלון שהחליט שזה רעיון הגיוני לתלות על דלת הקבלה שלט שאומר ״אם צריך אותנו תתקשרו למספר הבא״… לא יודע כמה תיירים טסים עם חבילת שיחות לחו״ל, אבל אני לא אחד מהם. ניחא. הסתובבתי קצת בעיר, כי בכל זאת… שלגגגגגגגגג.</p><p>בתמונה השלישית: רק לי השלג על הרכב עושה חשק לסופגניה?</p><p>בתמונה הרביעית: סופגניה.</p><p>בתמונה השישית: הכניסה לחדר הסודות בהוגוורטס.</p><p>בתמונה השמינית: ישו.</p><p>בתמונה העשירית רואים אגם יפה בתוך פארק גדול שבו בעצם צילמתי את כל התמונות הקודמות, ובאגם עשרות (אולי אפילו מעל מאה) ציפורים שטות. את התמונה הזו רצתי כדי לצלם, כי בעצם ממש כמה שניות לפני שהיא צולמה, כל הציפורים עפו במעגלים מעל האגם והמראה היה ממש מרשים… אך הייתי רחוק מכדי שיראו משהו בתמונה, ועד שהתקרבתי הן כבר היו בתוך האגם.</p><p>———</p><p>באופן כללי, וינה נראית יותר ידידותית ליהודים מאשר הולנד וגרמניה. פחות כתובות נאצה, יותר כתובות אהדה, ויותר יהודים באופן כללי (בין אם חבר׳ה עם שטריימל, ובין אם מסעדות כשרות בשם ״אצל מלכה״).</p>`,
              id: 77
            },
            {
              date: 'January 21, 2025',
              degrees: '0°',
              name: 'More Vienna!',
              shortName: 'More Vienna',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8b9edaf8-1061-472c-ac38-01746c5d0a2d_904bedeb-f95a-4355-93ec-165583a87d41.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/0c3b7576-66c9-480f-ad79-6e3e811eee6e_886e3b7b-8ff0-45fb-996b-f7e479d7a508.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7c2d0cdf-d0fe-4829-b396-df193167eda8_5eb51d46-553e-4738-ad9a-45956df9cdd9.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/dbd33bf4-eeab-4bde-8edd-43c5cc4d6cf3_e9a0b7a0-a452-4630-b560-6acc60b73174.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/d40dcd64-8920-492e-ad99-69f9fd6201a6_617c88c1-0764-4eb7-9e75-0edb988f2383.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/109bcdea-37c6-4624-affd-f3cdb531a666_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/a9b44006-4ed0-45b3-929a-495f1acf447e_aee3083d-6eb6-4cdd-8882-5422eac28d12.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/79e3422e-0e30-4318-9daf-5777dc224d9b_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7fd9ed8b-d78f-45fa-a601-8cb83ad649cb_397cbe40-ba71-4cce-95e5-0b1b3f8adfcc.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/098c5a13-696d-4108-8b5a-ff20f4555ca2_4fdb1a2e-51d0-4e2e-aa7d-3376c8ce6c13.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/32f221f4-0f0d-42d5-aeb8-d0164740d4ea_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5c700004-b1d9-442f-8de8-8dcbb69918d9_c5defe44-37b5-4071-940d-26542f7c9736.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/107148bf-34e5-4e91-bc19-37f5c2299cad_video'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/48e1a93b-8c62-40d1-9052-83f593a3aedf_9d26f7d5-568b-49bb-aec5-8c7317613f1e.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/dcb24b7b-ab16-4f84-be0c-7824b85d8585_816e27d3-575e-4c85-b842-562cc4be55f2.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8b9edaf8-1061-472c-ac38-01746c5d0a2d_904bedeb-f95a-4355-93ec-165583a87d41.jpg',
              description: `<p>בתמונה הראשונה קשה לראות כי למרות שמאוד התלבטתי, לא מצאתי דרך טובה להעביר בתמונה או בסרטון קצר את כמות הגרפיטי העצומה שממלאת את קירות הנהר משני צידיו. אם תעשו זום תוכלו לראות שאין פיסת קיר ללא גרפיטי, רובם ציורים די מרשימים הן באיכות והן בגודל, והם ממלאים קילומטרים על קילומטרים של קירות.</p><p>בהמשך היום הגעתי למוזיאון המוזיקה המפורסם של וינה.</p><p>בסרטון הראשון: משחק אינטראקטיבי חמוד (מתוך הרבה המשחקים האינטראקטיביים שנמצאים במוזיאון).</p><p>בסרטון הבא: אלטון ג׳ון (אני מתבדח כמובן. מישהו מזהה אגב?)</p><p>בתמונה הבאה: התמרת פורייה (בהתחלה חשבתי שסתם ציירו נוסחאות סתמיות על הקיר כדי להיראות מגניבים, אך במבט שני שמתי לב שהנוסחאות אכן קשורות קשר ישיר למוזיקה בעולם המתמטיקה והמחשבים).</p><p>בסרטון הבא: התמונות איכותיות מכדי להיראות אמיתיות… אני מנחש שמדובר בהדמייה של שוברט באמצעות בינה מלאכותית כזו או אחרת. כך או כך, זה די מגניב.</p><p>בסרטון הבא: מדרגות מנגנות.</p><p>בערב הגעתי לגולת הכותרת של הביקור שלי בוינה, ועליה אספר בפוסט הבא :)</p>`,
              id: 78
            },
            {
              date: 'January 21, 2025',
              degrees: '-1°',
              name: 'Johann Strauss Dinner',
              shortName: 'Strauss Dinner',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/40fdc604-d35f-4174-a5e5-03ded8c1365e_080d6138-1e58-49f8-bd3e-adb89b7158a4.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/40b71250-1e83-4022-9d55-0cdfdf4bf1b4_38e78457-8805-43be-b7f3-b6a33356be87.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/ebd08974-6d15-4266-9caf-aa9e79d712d5_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/26f47422-9099-4ec6-99c0-06579189df59_38c6596f-f4f5-48ca-a14e-67bf1c6175c8.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/621114ef-99f0-4a29-bf19-34773bc93097_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1582d6ab-79c2-4214-9fd1-d7c499e5d64d_f7a83aa6-f13a-4e08-9bdb-01446e296c49.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/28c2a2f8-c6de-423a-a027-297ff63d17df_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5e857502-d514-4e9d-af58-9ab91d97571b_837c4900-e9ba-4b73-afc0-d3b4a1c52694.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/9027def0-6c3a-4e76-bfe4-05edffab5afa_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/6961eec3-d5cb-4a00-b50b-f77665bb65fc_faba694b-1f64-4dc2-83da-e75882a60cbd.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/e1758599-b518-44b2-8f08-2c292f8a4643_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9fe306a9-939e-4b2e-bad0-26d5c6098a3c_e22702fe-f58f-48d8-ab21-d770558db82a.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/4b7c62c3-89ba-4d3c-86d9-a7ebfd6c5933_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/102dae97-fbc3-4cb3-b935-1676a344343d_b6ba30df-96fb-4175-9416-281d18cfb34d.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/da9f5891-6ca5-4789-a52b-43d48b3ee954_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/a6d55428-dacd-4e92-8f7d-c28e22368fd9_10220589-eb9f-433d-b0e8-c58816cff2c6.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/984b3a7d-6288-4daa-975f-53aef9ea5aba_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2cc6694a-31ec-4b55-b7d2-6afce662c84e_18b40d4b-49e6-40d6-9997-fb3653db2ffb.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/8f6fe748-ec06-4870-b7f3-7092b030f9e1_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2b02dccb-a31a-4afc-8cee-f8a874fe232f_4d80cab9-8e1b-4cb2-9ebf-4dd0581750c8.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/e4fe9ba3-a66d-4dea-aec2-3b1d24048787_video'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/9c14c57c-5b2b-41f2-90c7-a3d7aab5f293_b56142ce-161e-4698-995d-6f28052ae6e7.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/1d33e6a9-d0ac-4de8-b463-8c632fe5e361_video'
                }
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/40fdc604-d35f-4174-a5e5-03ded8c1365e_080d6138-1e58-49f8-bd3e-adb89b7158a4.jpg',
              description: `<p>הערב הלכתי למאורע שמורכב מקונצרט של תזמורת שמנגנת מוזיקה של יוהאן שטראוס (a.k.a. ״מלך הואלסים״, והוא גם הבחור שקראתי לו ישו לפני שני פוסטים); בנוסף לתזמורת יש גם זמרת אופרה, רקדנים שמלווים חלק מהמנגינות, וכל זה תוך כדי ארוחת ערב וינאית קלאסית.</p><p>המחיר לחלוטין היה שווה את החוויה, ההשקעה הייתה ניכרת בכל הפרטים הקטנים (לרבות מעברונים מלאי בדיחות והומור בין הקטעים המוזיקליים), ואת הסרטונים אני חושב שאין צורך לתאר במילים - רק דעו שגם אנשים שאינם חסידים של מוזיקה קלאסית יכולים ליהנות (וסביר שיהנו) מהסרטונים הנ״ל.</p>`,
              id: 79
            }
          ]
        },
        {
          name: 'Slovakia',
          bgImage: slflag,
          steps: [
            {
              date: 'January 22, 2025',
              degrees: '-1°',
              name: 'Bratislava',
              shortName: 'Bratislava',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/59325f66-6960-4a77-817a-35107c3c7654_32eed8c5-f8ba-4bcb-8f15-6ffebc9c44b5.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/300406b6-8d10-4250-85c4-8f1a483d0e90_b7f58843-b36c-4a8a-812f-9e6b0fab24aa.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7915bd8c-9151-4e7b-805f-5cc3c35117bb_2dc67923-2e7b-4df2-9648-0ae29c5db2f9.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/a820a9a9-fc8f-4d5f-acfe-e205d84b5480_967c6657-c5d1-4b10-8400-54379cbc8695.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/ed72d5ce-a442-4fdc-b110-0b994db1ed88_52d58c1d-4369-472b-b4c5-68d99ea30e4c.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5f424d7d-f70f-4c3d-ba39-a9aafac05ea7_9952313d-2a4c-4147-b851-610c4bf064f0.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/59325f66-6960-4a77-817a-35107c3c7654_32eed8c5-f8ba-4bcb-8f15-6ffebc9c44b5.jpg',
              description: `<p>אחרי שישנתי כהלכה (קורה לעיתים רחוקות, יכול להיות שבקבוק היין השלם ששתיתי אתמול בקונצרט עזר לכך), ארזתי את חפציי, יצאתי מהמלון ואכלתי את השניצל הוינאי האחרון לטיול זה (עם רוטב אוכמניות משום מה), יצאתי לכיוון התחנה המרכזית ותפסתי את האוטובוס לברטיסלבה, עליו הצטרפו מאוחר יותר תומר ואיתי.</p><p>תומר הוא חבר שהכרתי באינטל, הוא חובב קפה ובירות, ואפילו מכין בירות בעצמו! איתי הוא חבר של תומר שלא הכרתי לפני הטיול, אבל תכננו שלושתנו ביחד להגיע על אותו אוטובוס לברטיסלבה ולבלות חלק מהטיול ביחד.</p><p>בעצם כבר לפני כמה חודשים תומר שאל אם ארצה להצטרף אליהם. המטרה: בירות, קפה, וראמן. בתור אחד שלא חובב בירות גדול במיוחד, לא שותה אף פעם קפה, ואכל די הרבה ראמן ביפן... ברור שאמרתי "כן".</p><p>וכך באמת היה - הסתובבנו בין בתי קפה וברים, שתינו בירות בטעמים שמעולם לא הכרתי (בתמונה של הרמזור למשל, אני שתיתי את הבירה הירוקה שזו בירת קיווי), ואכלנו ראמן מוצלח שתומר פינטז עליו כבר חודשים.</p><p>בערב הגענו לדירה ששכרנו ב-airbnb (דירה שלמה לעצמנו), בידיעה שאנחנו כאן ללילה אחד בלבד, כי מחר - נוסעים לפראג!</p>`,
              id: 80
            }
          ]
        },
        {
          name: 'Czechia',
          bgImage: czflag,
          steps: [
            {
              date: 'January 23, 2025',
              degrees: '4°',
              name: 'Prague',
              shortName: 'Prague',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/f68f7ea8-97ee-47c4-9b68-596677891c7d_8909f463-5627-4204-9633-bc0c503d34aa.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/b363a0e9-aa2b-4805-8de7-b1673e99985e_1720ad56-d807-4f9a-b9dd-80e7622def8f.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/09166b11-ce30-4213-b48f-c1f18f3b7d70_9fd20a84-957d-4c5a-972a-01572891225b.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/59b08cd5-5784-4157-926f-ea04120e6ec0_f03eb782-2783-4e85-a96b-cdc9e1a61d5a.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/d4f29f5c-e974-4548-bb0d-c2587e230bfc_a98de633-1249-45db-88f2-c8efaadb9c2c.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/4ea66f68-2acd-4baf-ae2e-a366ff71bb13_25d64880-1c8c-4f5e-a5cb-23a1a35c90ff.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/86180bc0-9e79-4b96-a81e-1c30b007143a_4ea66f68-2acd-4baf-ae2e-a366ff71bb13'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/bbd4d944-656b-421b-be28-61f0cfee4f59_f57e8cf9-571d-4f09-a1cc-d4d88aaf101b.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/59b08cd5-5784-4157-926f-ea04120e6ec0_f03eb782-2783-4e85-a96b-cdc9e1a61d5a.jpg',
              description: `<p>פראג. פראג... מה עושים בפראג?</p><p>ובכן, הולכים לראות פסל של סוס הפוך כמובן!</p><p>תומר איתי ואני עלינו על הרכבת מברטיסלבה לפראג (שלמרבה הפלא, למרות היותה צפונית לברטיסלבה, הייתה הרבה פחות קרה ובכלל לא מושלגת). בפראג פגשנו בחבר ישראלי נוסף שלהם, והלכנו יחד לבר החביב עליהם בפראג.</p><p>מדובר כאן בברמן חובב ישראל מאוד.  מ א ו ד. וכמה שהוא חובב ישראל, הוא גם שונא את רוסיה. אז בדלת הכניסה לבר שלו יש כמה שלטים, והגדול ביניהם עם צבעי אוקראינה אומר... עדיף שתשאלו חברים דוברי רוסית מה רשום שם, זה יצחיק אותם. בפנים על אחד הקירות יש דגל ישראל ענק ותחתיו אוסף מרשים של בירות ישראליות שעל רובן בכלל מעולם לא שמעתי. התמונה החמישית, זו שאחרי הבירות הישראליות, מציגה בפשטות את האהבה שלו לישראל לצד השנאה שלא לרוסיה, תרתי משמע.</p><p>אחר הצהריים נפרדתי מהחברים הישראלים שלי והלכתי לעשות צ'ק אין במלון ומשם לנסוע לנמל התעופה בפראג. ולמה לי לעשות את זה? כדי לאסוף את אבא שלי כמובן שהגיע להצטרף אליי בחלק האחרון של הטיול הגדול שלי 🥳</p><p>בתמונה האחרונה: אני (משמאל) ואבא (מהשמאל השני).</p>`,
              id: 81
            },
            {
              date: 'January 24, 2025',
              degrees: '7°',
              name: 'Praha',
              shortName: 'Praha',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8180b648-9f2c-4a76-bedb-0052fead4c0e_2af4750d-af35-4afc-8950-6fdccecb9e6a.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7202cdb3-504a-4a26-b785-6d523ee3b640_86db3e6b-e0da-47d0-8c04-ecac32a67423.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8d7f67bf-968e-443d-81cb-bd2c7e0d628d_af5a8aa5-52b5-40b6-b5a0-7b6f69b21661.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/d9448b58-9b43-4e67-823e-10bf212b1604_36030b63-be3b-459f-8a3e-55f71d8b7ff9.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/81355be7-491b-400f-b3e0-f10b1979bebf_f9b41a84-8660-4f8e-a6e1-57b2c050a154.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/3e8cf5d9-7456-45f7-ae14-c68fdbc2c9a8_4069c550-146c-4dee-956a-062e88610214.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/85153e6d-1de9-499a-954d-1fa095acdfb5_660262ec-13bb-4d23-8cd4-f086896fcc68.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/b603315e-d439-449c-9cbc-85e8730d8135_f4bf6739-2ab2-45c2-b9ab-93fc9f11396d.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/bcc6e28f-49f1-4a6d-ad0b-5ed10783ee61_eba9a57f-7a6f-43a5-ae20-bc589cd3a441.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/232f5961-9a20-4065-8165-70b33962353f_bcc6e28f-49f1-4a6d-ad0b-5ed10783ee61'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/b3f6e512-fbf0-4771-afaf-43731f23b509_7716e0c2-8563-481a-93a5-80edab8cdf13.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/24760492-0e09-418f-bd55-d04e19beccd7_b3f6e512-fbf0-4771-afaf-43731f23b509'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/fa34ac8d-a6f8-4728-9f09-626f38dc4d97_d1e68531-4e9d-4b78-9331-8fe9c53d6729.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/94be4b06-daa5-4319-927b-d0c63e6041c6_fa34ac8d-a6f8-4728-9f09-626f38dc4d97'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/266d6b65-6981-4f36-a6c5-9b93d2645535_c9e64590-3a9f-40b4-8659-cb56091e75cb.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/8180b648-9f2c-4a76-bedb-0052fead4c0e_2af4750d-af35-4afc-8950-6fdccecb9e6a.jpg',
              description: `<p>בתמונה הראשונה: אבא מחזיק את השעון האסטרונומי במו ידיו.</p><p>בתמונה השנייה: אני מאכיל את בני עמי (יונים) אוכל רחוב מוצלח.</p><p>בתמונה השלישית: שח משולש.</p><p>בתמונות הבאות: בערב יצאתי להסתובב קצת ברגל באזורים מרוחקים מהמרכז בפראג, ותפסתי על הדרך נוף יפהפה של מרכז העיר ממקום גבוה. באותו אזור גבוה היו שאריות שלג (כאמור, פראג עצמה לא הייתה מושלגת), ובהמשך מצאתי שם גם בר שבו השתתפתי בג'אם האחרון שלי לטיול הזה. הנגנים היו מוצלחים, האווירה הייתה מוצלחת, הכל היה מעולה במקום הזה - אחלה של סיום לחוויות המוזיקליות שלי מסביב לעולם (לעת עתה!).</p><p>בתמונה האחרונה: שטויות של דור אלפא.</p>`,
              id: 82
            },
            {
              date: 'January 25, 2025',
              degrees: '10°',
              name: 'Praגa',
              shortName: 'Praגa',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/21eb852b-8434-4984-b00f-328971a8fda8_fda87ab4-c506-4b8c-84e7-2f9bd2ecaf38.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2737f7e0-0686-48c6-aa54-d9a29a601146_ac1e9b50-c5d7-4eff-89b6-a7c011d31edb.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/fb2394bf-4476-4948-8e63-47f08dbe50b7_8dc274f8-cf26-4f62-83f3-d525674b5618.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/e8141112-dd91-4dfd-8de4-9fd3e27f293a_05a132c8-49bc-408b-84e8-001d2e7a111f.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1a644990-5b4f-4e55-8210-cc10ab7d98ad_8fdf0e5a-0869-4a9e-985f-6d597e034b63.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/12455e6e-0bcb-4502-a156-fdb4b3a61cd9_a43c6fe8-2283-46b5-983d-259b348b17ec.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2043f028-9ace-4bb2-8cbd-f686ca71b736_36c9edc1-9129-4b78-bae9-ec6df1176a7d.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/e8141112-dd91-4dfd-8de4-9fd3e27f293a_05a132c8-49bc-408b-84e8-001d2e7a111f.jpg',
              description: `<p>(למה לפראג יש כל כך הרבה שמות?)</p><p>בכל מקרההההההה</p><p>הסיבה העיקרית להגעה שלי לפראג, ובהתאם גם הסיבה של תומר ואיתי וחברים ישראלים אחרים שלהם להגיע לפראג, היא... פסטיבל בירה!</p><p>אז אני אסביר לכם איך זה עובד: משלמים 100€ לבנאדם, מקבלים כרטיס כניסה שתקף למשך 10 שעות, מ-12 בצהריים ועד 10 בערב, ובכניסה כל אחד מקבל כוס של 150 מ"ל. בתוך המתחם (שהיה אגב בכנסייה) נמצא אולם גדול ובו מעל 20 דוכנים של בירות. כל דוכן שייך למבשלה מסוימת, וכל מבשלה מציעה בדיוק 6 בירות: שני סוגים במהלך הצהריים, שני סוגים אחרים אחה"צ, ושני סוגים עוד יותר אחרים בערב. אנחנו יכולים לגשת לכל דוכן שארצה ולטעום כמה בירות שנרצה (עד שהמלאי נגמר), ובצד יש מתקן מיוחד לשטיפת כוסות כדי לטעום את הבירה הבאה. למרות שמדובר רק ב-150 מ"ל, מהר מאוד למדנו לבקש רק חצי כוס כי אין סיכוי שנטעם את כל 150 סוגי הבירות שהגישו בפסטיבל באותו יום.</p><p>מסוגי הבירות ששתיתי:</p><ul>  <li>בירת חיטה</li>  <li>בירה שחורה</li>  <li>בירת פירות הדר</li>  <li>בירה בטעם תות בננה</li>  <li>בירה בטעם קפה שוקולד</li>  <li>בירה בטעם גלידת פיסטוק</li>  <li>בירה שיושנה 3 שנים בחביות וויסקי</li></ul><p>אגב, כל הבירות שמניתי להלן (וכל הבירות בכלל באותו יום) הכילו בין 5-15 אחוזי אלכוהול.</p><p>בפסטיבל היו המון אנשים, ואבא ואני חלקנו שולחן עם כמה חבר'ה מקומיים מאוד ידידותיים. במהלך הערב אבא אפילו חלק איתם וויסקי (חלק תהו מי מביא וויסקי לפסטיבל בירה, וחלק דווקא התלהבו מהרעיון).</p><p>בתמונה האחרונה: אני מצלם בחור שמצלם בחור שמצלם את הבירה שלו.</p>`,
              id: 83
            },
            {
              date: 'January 26, 2025',
              degrees: '8°',
              name: 'Vietnamese Respite 🇻🇳',
              shortName: 'Vietnam??',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/a64730d0-8345-41db-a257-af12697519b6_2301bf81-114a-4436-accb-d68583eb1cc8.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5afee968-ff19-4cf3-a255-8ee140921b8f_6809b122-c0eb-445c-8edf-9aad3e43eae6.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1972471d-5c0b-4e76-8cf8-d3c26d1f4b20_7355d821-435e-48a9-8e9f-b6ce8425b4aa.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7d86dd81-0db0-4155-8d88-c7b63d95a968_e69d3db1-f235-49cb-baa6-30d6cc205d83.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/5b978115-1cc7-4a35-b7c5-8e7c86459137_f7ad2987-e2fc-4d63-bcb2-5b85974d3530.jpg',
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/85de169c-978f-44d9-a793-5b442882b60f_b9867f89-5019-41e3-9a25-d4064459fe4a.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/95a492d5-60af-4542-993c-b50bf70d87af_85de169c-978f-44d9-a793-5b442882b60f'
                },
                {
                  thumbnail:
                    'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/52ed3512-7ee6-4118-b64f-e56ff1f85b01_599bc9af-ad12-4502-bf40-57cd9a1f84c5.jpg',
                  video:
                    'https://d2pu9g51kblnwk.cloudfront.net/polarsteps-video/u_12626853/172d61a5-cc09-4a4a-8c83-2c6bd26758b6_52ed3512-7ee6-4118-b64f-e56ff1f85b01'
                },
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/1a1a59f9-a42c-4824-b506-811b123a7c16_2215985f-adfa-48ff-94d1-da16c5f945b5.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/7d86dd81-0db0-4155-8d88-c7b63d95a968_e69d3db1-f235-49cb-baa6-30d6cc205d83.jpg',
              description: `<p>את היום האחרון שלנו בפראג התחלנו בטיול בשוק הויאטנמי שנמצא כ-10 ק"מ דרומה למרכז העיר. בפראג יש הרבה ויאטנמים, ולמרבה הפלא לא קיבלנו רושם שהשוק מיועד לתיירים בכלל - אלא לויאטנמים עצמם. אז קיבלנו חוויה אותנטית (יחסית), ואכלנו אוכל אותנטי, ואחר כך גם נסענו באוטובוס אותנטי חזרה למרכז העיר.</p><p>במרכז העיר הלכנו לראות את הטירה הענקית של פראג (טוב, אפשר לראות אותה כמעט מכל מקום בעיר, אבל נו הבנתם שאני מתכוון לממש לראות אותה מקרוב אוף למה ישר להתקטנן). היא הייתה די מרשימה וגם די סגורה, וגם גדולה מכדי שאצליח לצלם את כולה, אז לפחות צילמנו את עצמנו מחזיקים את השפיצים שלה.</p><p>בערב הלכנו לחפש... בירה שחורה כמתנה לאמא שלי הביתה. אחד החברים הישראלים בפראג המליץ על מבשלה שראיתי שיש לה דירוג גבוה בגוגל, אז גררתי את אבא לשם. כשהגענו הסתבר שמדובר במבשלה-מסעדה-פאב (משהו שמשלב בין השלושה), והפורמט הוא כדלהלן: במסעדה יש 3 שולחנות ארוכים, ואנחנו מתיישבים היכן שנרצה (כנראה ליד אנשים אחרים כי יש הרבה אנשים). מלצר עובר עם מגש מלא בירות שחורות ובהירות, ומוריד בירה לכל מי שאין לו בירה לידו על השולחן (כלומר ברירת המחדל היא להניח שתרצו בירה). בהמשך ראיתי גם תפריט שהיה בו אוכל אותנטי, ושני סוגי הבירות שהמלצר הסתובב איתם הם בעצם שני סוגי הבירות שהמבשלה הזו מייצרת.</p><p>במהלך הערב הגיעו נגנים שונים בלבוש מסורתי להנעים לנו את הערב עם מנגינות נעימות, ואבא ואני כמובן התיידדנו עם החבר'ה שישבו לידנו (מדובר בהודי אחד צעיר מצד אחד שלנו, וזוג של בריטי ופולניה מהצד השני שלנו). ביציאה קנינו בירה אחת מהמבשלה במטרה להביאה לארץ, ואבא ואני הסכמנו פה אחד (הפה של אבא) שאין סיכום יותר טוב לטיול מאשר החוויה שחווינו במסעדה-מבשלה-פאב הזה :)</p><p>נ.ב. שמתם לב לבתי המנורות של הנברשת בסרטון?</p>`,
              id: 84
            }
          ]
        },
        {
          name: 'Israel',
          bgImage: ilflag,
          steps: [
            {
              date: 'January 27, 2025',
              degrees: '20°',
              name: 'Summary 🇯🇵🇺🇸🇺🇳🇮🇱',
              shortName: 'Home',
              media: [
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/2e9ac0b3-3531-40d5-bfaa-f955848b4471_df76251d-ff15-4693-b25a-50ad51bd72a9.jpg',
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/783ae469-1139-4b14-86a8-627581d6f3d1_9844ccea-5358-4a51-8940-0069dd789f48.jpg'
              ],
              bgImage:
                'https://media.prod.polarsteps.com/user_images/steps/large_thumb/u_12626853/783ae469-1139-4b14-86a8-627581d6f3d1_9844ccea-5358-4a51-8940-0069dd789f48.jpg',
              description: `<p>רגעי שיא בטיול:</p><ul>  <li>המבט על פני הברמן באוטסו כשהשמעתי לו שירים שלא שמע מעל 30 שנה.</li>  <li>הרגע הזה שאחיינים שלי לא רצו שאכנס איתם לרכב בהוואי.</li>  <li>הרגע הזה שאחיינים שלי לא רצו שאצא מהרכב ואעזוב את הוואי.</li>  <li>הקונצרט של סוניק בניו ג'רזי.</li>  <li>הג'אמים באוטרכט.</li>  <li>הערב האחרון עם אבא שלי במבשלה-בר-מסעדה בפראג.</li></ul><p>רגעי שפל בטיול:</p><ul>  <li>לשתות מים באתיופיה.</li>  <li>לשכב חולה ומחוק במיטה בעודי בוהה בשלג הראשון שאני חווה... מבעד לחלון.</li>  <li>לפספס טיסה.</li>  <li>לפספס עוד טיסה.</li>  <li>להספיק לטיסה, אבל לנחות בלי מזוודה.</li>  <li>כמות האוטובוסים בטיול הזה שרצתי אליהם וראיתי את דלתותיהם נסגרות לי מול הפנים הייתה די מרשימה. מצד שני, גם כמות האוטובוסים שהספקתי להגיע אליהם ברגע האחרון הייתה לא פחות מרשימה; אני חושב שהמסקנה המתבקשת היא... שהשתמשתי הרבה בתחבורה ציבורית.</li></ul><p>במהלך הטיול הבחנתי בכמה אמיתות אוניברסליות שנכונות לכל מקום שהייתי בו, למשל:</p><ul>  <li>בעל תמיד מפחד מאשתו (אני מתנצל על בדיחת הקטורזה הזו).</li>  <li>צעירים מכל מקום לא רואים את עצמם מסוגלים לקנות בית יום אחד.</li>  <li>מסריח. כל מקום מסריח. זו אמנם לא חוכמה בהתחשב בכך שרוב הערים שטיילתי בהן היו ערי בירה או ערים גדולות, ועדיין... ריח של פיח ושל סיגריות ליווה אותי בכל מקום שהייתי בו, בכל תרבות, בכל מזג אוויר. פסיכולוגית שלי לפני כמה שנים לימדה אותי כיצד להבחין יותר בדברים וברגשות (mindfulness), כיצד לחיות יותר את הרגע ולא לחסום את מה שאני מרגיש. אבל הסירחון הזה... אני חושב שהוא מסוג הדברים שגרם לי לסתום את האף מלכתחילה ולהתחיל לחסום.</li></ul><p>יש אנשים שמספרים ש-"הטיול הגדול" שלהם שינה אותם, במובן כזה או אחד. אני לא אגיד שהטיול שינה אותי... אבל כן אגיד שדמיינתי הרבה במהלך הטיול איזה סוג של בנאדם ארצה להיראות בעתיד, ובעקבות החלטות שקיבלתי אני עושה ואעשה שינויים בהתאם כדי לעצב את עצמי כמו שאני רוצה להיות - או לפחות כמו שאני חושב שאני רוצה להיות. אבל זה כבר עניין אישי שלי.</p><p>בנושא אחר, משהו שהפתיע אותי בטיול הזה - במשך כל שלושת החודשים שבהם טיילתי, בכל מקום שהייתי בו, לא נתקלתי באנטישמיות (באופן אישי) ולו פעם אחת. לפני הטיול אנשים שאלו אותי מה אגיד כשישאלו אותי מאיפה אני, ואמרתי שאגיד שאני מישראל. שאלו אותי "ומה תעשה אם יגיבו לכך בשלילה או אפילו באלימות?", והתשובה שלי היא... לא יודע. לא הייתה לי תשובה. אני טוב בלאלתר, קיוויתי להצליח לאלתר משהו במידה ואגיע למצב כזה - אך בכלל לא הגעתי אליו, למרות שבכל מקום אמרתי שאני מישראל ללא בושה או חששנות. אני חייב לציין שכן יצא לי להיתקל באנטישמיות ברחובות בדמות גרפיטי, פוסטרים והשחתת סממנים יהודיים. אך לא באופן אישי. על אירופה אגב אני יכול להגיד שכל מי ששאל אותי "נו אז איך אירופה בהשוואה לשאר העולם??" עניתי בדיוק את אותה תשובה: "אירופה מקסימה ממש... אבל לא ליהודים", והשואלים שלי תמיד הסכימו איתי בעצב. יש לציין שככל שהתקדמתי מזרחה באירופה, כך האנטישמיות ברחובות פחתה, והמרחב נראה באופן כללי יותר ידידותי ליהודים.</p><p>לסיכום אני רוצה להגיד תודה לאנשים שאוהבים אותי ותמיד תומכים בי מרחוק, ושנותנים לי מרחב בטוח לשתף בו מחשבות עמוקות, גם אם חלקן לא שגרתיות במיוחד. תודה לבנדוד שלי שאמר לי יום לפני הטיול להוריד פולארסטפס כי אני חוויתי כל כך הרבה בטיול הזה שאני בטוח שהייתי שוכח חוויות לולא היומן החביב הזה, ותודה לאור על התגובות המצחיקות והשנונות שלו על הפוסטים שלי.</p><p>אני סמוך ובטוח שאם וכאשר אעשה שוב טיול גדול בחיי, אני ארצה שהוא ייראה בדיוק כמו הטיול הזה - אבל אחרת לגמרי.</p><p>❤️</p>`,
              id: 85
            }
          ]
        }
      ]
    }
  ]
}

// Note: continents and countries must occur by the same order as in the trip object,
// however the steps of each country are sorted by date.
export const continents: Continent[] = trip.continents
export const countries: Country[] = continents.flatMap((continent) => continent.countries)
export const steps: Step[] = countries.flatMap((country) =>
  country.steps.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
)
export const dates: string[] = steps.map((step) => step.date)

export const getCountryByStep = (step: Step): Country =>
  countries.find((country) => country.steps.some((s) => s.id === step.id)) || {
    name: 'Unknown Country',
    steps: []
  }

export const getContinentByStep = (step: Step): Continent =>
  continents.find((continent) =>
    continent.countries.some((country) => country.steps.some((s) => s.id === step.id))
  ) || {
    name: 'Unknown Continent',
    bgImage: '',
    countries: []
  }

// Formats a long date string like "January 1, 2025" to "1-1-2025"
export const formatDate = (longDateString: string): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const match = longDateString.match(/^([A-Za-z]+) (\d{1,2}), (\d{4})$/)
  if (!match) return longDateString
  const month = months.indexOf(match[1]) + 1
  const day = parseInt(match[2], 10)
  const year = match[3]
  return `${day}-${month}-${year}`
}

export const encodeURIStep = (step: Step) => `${step.id}-${encodeURIComponent(step.shortName)}`

export const decodeURIStep = (id: string) => {
  const [stepId, _] = id.split('-')
  return steps.find((step) => step.id === Number(stepId))
}

export const isImage = (media: MediaType): boolean => typeof media === 'string'

export const highlights: MediaType[] = [
  steps[10].media[3], // hakone
  steps[13].media[0], // ibaraki
  steps[15].media[1], // hiragana
  steps[16].media[6], // universal
  // steps[19].media[0], // flamed ramen
  steps[19].media[4], // beautiful screensaver
  steps[22].media[3], // kobe orchestra
  steps[22].media[11], // note to Akiko
  steps[24].media[9], // Otsu l'chaim
  steps[26].media[3], // Otsu music (TODO)
  steps[28].media[0], // snow monkeys
  steps[28].media[5], // more monkeys
  steps[30].media[2], // buddah
  steps[34].media[2], // slappin'
  steps[36].media[0], // making ramen
  steps[37].media[1], // rocky <3
  steps[39].media[4], // bird
  steps[40].media[6], // moanalua
  steps[41].media[2], // nephews
  steps[44].media[2], // hawaii omg
  steps[47].media[6], // hillel
  steps[49].media[0], // lionel
  steps[52].media[8], // his world
  steps[54].media[14], // back to the future
  steps[55].media[7], // princeton sunset
  steps[59].media[9], // funny grandma
  steps[66].media[4], // amsterdam jam
  steps[70].media[6], // oye como va
  steps[75].media[3], // nuremberg
  steps[76].media[7], // jesus
  steps[78].media[3], // strauss dinner
  steps[79].media[3], // traffic lights beer
  steps[80].media[3], // israeli beers
  steps[81].media[10], // under the bridge
  steps[82].media[5], // beer festival
  steps[83].media[6], // brewery
  steps[84].media[1] // peleg
]

export const music: MediaType[] = [] // ...and art / food?

export const people: MediaType[] = [
  steps[6].media[0], // yoni
  steps[9].media[0], // jason
  steps[10].media[6], // hakone dudes
  steps[11].media[0], // hakone other dudes
  // steps[15].media[0], // yoni again
  steps[22].media[5], // she never told me her name
  steps[24].media[5], // otsu jam
  steps[28].media[5], // monkey
  steps[30].media[0], // taki
  steps[32].media[3], // graphy dudes
  steps[34].media[6], // graphy dudes 2
  steps[37].media[0], // rocky
  steps[38].media[0], // arriving in hawaii
  steps[39].media[7], // diamond head
  steps[39].media[8], // diamond head 2
  steps[40].media[0], // moanalua
  steps[40].media[6], // moanalua 2
  steps[42].media[0], // kidush
  steps[43].media[3], // barak
  steps[44].media[11], // michal and kids
  steps[49].media[1], // lionel
  steps[50].media[1], // newark bus dude
  steps[51].media[3], // jack, lauren & sean
  steps[54].media[14], // back-to-the-future girl
  steps[56].media[5], // evan & anya
  steps[57].media[0], // evan & tzipi
  steps[58].media[2], // allen
  steps[59].media[1], // evan
  steps[59].media[9], // grandma
  steps[62].media[1], // john
  steps[64].media[0], // evan & me
  steps[64].media[5], // bunch of jews
  steps[64].media[6], // bunch of jews 2
  steps[68].media[1], // lera & guy
  steps[71].media[0], // mike
  steps[73].media[5], // rudolf
  steps[75].media[2], // hussners
  steps[80].media[1], // prague dudes
  steps[81].media[0], // dad with clock
  steps[82].media[4], // beer festival dudes
  steps[83].media[2], // me & dad
  steps[84].media[0] // family
]

export const getCustomSlides = (type: CustomSlidesType) => {
  if (type === CustomSlidesType.Highlights) return highlights
  if (type === CustomSlidesType.Music) return music
  if (type === CustomSlidesType.People) return people
  return CustomSlidesType.None
}
