import axios from "axios";

export function loadProjects() {
  return axios.get("https://techport.nasa.gov/api/projects", {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUZWNoUG9ydCIsImV4cCI6MTcwNTU5MzU3NSwibmJmIjoxNzA1NTA3MTc1LCJTRVNTSU9OX0lEIjoiT1JwYmM1bDZBYUFRNW92T1JuclNDa28wN2g3Z3JETVRsczUwIiwiRklOR0VSUFJJTlRfSEFTSCI6IjNFMDUwMTE4NTVDQTVCNTczMjhCMTlDMERCNTk2RUFENDI5QkEwODQ5MDVFQjk0NzEzQjhCRDNCM0Y3NEJENUEifQ.xcchpjS9XwQWjHFalxt0IjniQD29waGQzHBFEAdO_4E`,
    },
  });
}
