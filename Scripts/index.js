// GLOABLS VERY BAD FOR NOW

const username = "silassentinel";

// -------------------------------------------------------------------------------------------------------------------------------------------------

function run()
{

  const element = document.querySelector('#keepMeVisible');
  const observer = new IntersectionObserver((entries) =>
  {
    entries.forEach((entry) =>
    {
      if (entry.isIntersecting)
      {
        console.log("in view");
      } else
      {
        console.log("out of view");
      }
    });
  });
  window.addEventListener('scroll', function ()
  {
    observer.observe(element);
  });
}

async function getAllRepos(username)
{
  try
  {
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    const repos = await response.json();
    return repos;
  } catch (error)
  {
    console.error("Error fetching repositories:", error);
    return [];
  }
}

function jsonToUnorderedList(jsonArray) {
  let ul = document.createElement("ul");

  jsonArray.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name;
    ul.appendChild(li);
  });

  return ul;
}


// -------------------------------------------------------------------------------------------------------------------------------------------------

if (document.readyState === "loading")
{
  try
  {
    console.log("Loading...");
  }
  catch (error)
  {
    console.error("Error fetching repositories:", error);
  }
}
else if (document.readyState === "interactive") { }
else if (document.readyState === "complete")
{

  
}
else { }