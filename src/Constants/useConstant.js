export const YOUTUBE_API_KEY=process.env.REACT_APP_YOUTUBE_API_KEY;



export const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=52&regionCode=IN&key="+YOUTUBE_API_KEY;


export const YOUTUBE_video_ID="https://www.googleapis.com/youtube/v3/videos?id=VIDEO_ID&key="+YOUTUBE_API_KEY+"&part=snippet&part=statistics"

export const YOUTUBE_CATEGORIES="https://www.googleapis.com/youtube/v3/search?part=snippet?part=statistics&type=video&videoCategoryId=Your_Category_ID_Here&key="+YOUTUBE_API_KEY

export const YOUTUBE_SEARCH_SUGGEST="https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&locationRadius=500km&maxResults=10&order=title&q=iphone&relevanceLanguage=en&&relevanceLanguage=en&type=video&hl=en&key="+YOUTUBE_API_KEY+"&q="

export const YOUTUBE_LIVE_videoS="https://www.googleapis.com/youtube/v3/search?key="+YOUTUBE_API_KEY+"&part=snippet&type=video&q=live&eventType=live";

export const YOUTUBE_SEARCH_QUERY="https://www.googleapis.com/youtube/v3/search?part=snippet&q={SEARCH_QUERY}&key="+YOUTUBE_API_KEY;

export function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}



export function Namegenerate() {
  let nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
  ];

return  nameList[Math.floor(Math.random() * nameList.length)];
     
    };




    export const CheckValidation=(email,password,confirmPassword,name)=>
    {
         const IsvalidEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
         const IsvalidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
          if(name === '') return "Enter your username"
         if(!IsvalidEmail) return "Email ID is not valid"
         if(!IsvalidPassword) return "Password is not valid"
         if (confirmPassword !== undefined) {
         
          if (confirmPassword === '') {
            return 'Confirm password cannot be empty.';
          } else if (confirmPassword !== password) {
            return  'Passwords do not match.';
          }
        }
         return null;
    }    
  export   const countToDisplaycount=(viewCount)=>
    {
      if(viewCount>=1000 && viewCount<=999999)
      {
          let value= viewCount/1000;
          let out=value.toFixed(1);
          return out+"k";
      }
      else if(viewCount>=1000000 && viewCount<=999999999 )
      {
          let value= viewCount/1000000;
          let out=value.toFixed(1);
          return out+"M";  
      }
      else if(viewCount>=1000000000)
      {
          let value= viewCount/1000000000;
          let out=value.toFixed(1);
          return out+"B";  
      }
      else{
          return viewCount
      }
    }