<script>
  async function getRepos() {
    const response = await fetch('https://api.github.com/users/Daniiizita/repos');
    const repos = await response.json();
    const reposList = document.getElementById('github-repos');
    
    repos.slice(0, 3).forEach(repo => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = repo.html_url;
      a.textContent = repo.name;
      li.appendChild(a);
      reposList.appendChild(li);
    });
  }
  
  getRepos();
</script>
