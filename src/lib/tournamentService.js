export const loadTournament = async (phaseGroupId) => {
  const targetUrl = `https://api.smash.gg/tournament/${phaseGroupId}`;
  console.log("phase group id" , phaseGroupId);
  const tailEndUrl = `/event/melee-singles/standings?entityType=event&expand[]=entrants&mutations[]=playerData`
  const getFetch = await fetch(targetUrl + tailEndUrl);
  const getJson = await getFetch.json();
  console.log(getJson);
  return getJson;
}
