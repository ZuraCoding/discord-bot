module.exports = async (client) => {
  console.log(`${client.user.tag} is online.`);

  const activities = [
    { name: '?help', type: 0 }, // PLAYING
    { name: 'With Zura', type: 3 },    // WATCHING
    { name: '?voidcook', type: 2 },        // LISTENING
    { name: 'with zura', type: 0 }, // PLAYING
  
  ];

  let index = 0;

  setInterval(() => {
    const activity = activities[index % activities.length];
    client.user.setActivity(activity.name, { type: activity.type });
    index++;
  }, 20_000); // every 20 seconds
};
