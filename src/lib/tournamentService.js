export const loadTournament = async (phaseGroupId, gameName) => {
  const targetUrl = `https://cors-anywhere.herokuapp.com/https://api.smash.gg/tournament/${phaseGroupId}`;
  const tailEndUrl = `/event/${gameName.split(" ").join("-")}/standings?entityType=event&expand[]=entrants&mutations[]=playerData`
  const getFetch = await fetch(targetUrl + tailEndUrl);
  const getJson = await getFetch.json();
  console.log(getJson);
  return getJson;
}
