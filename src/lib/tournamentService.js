export const load_tournament = async (phaseGroupId, gameName) => {
  const targetUrl = `https://cors-anywhere.herokuapp.com/https://api.smash.gg/tournament/${phaseGroupId}`;
  const tailEndUrl = `/event/${gameName.split(" ").join("-")}/standings?entityType=event&expand[]=entrants&mutations[]=playerData`
  console.log(targetUrl + tailEndUrl);
  const getFetch = await fetch(targetUrl + tailEndUrl);
  const getJson = await getFetch.json();
  return getJson;
}
