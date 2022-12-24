function kruskal(vertices, edges) {
  // Sort the edges in ascending order by weight
  edges.sort((a, b) => a.weight - b.weight);

  // Create a disjoint-set data structure to store the sets of vertices
  const sets = [];
  for (let i = 0; i < vertices.length; i++) {
    sets.push({ parent: i, rank: 0 });
  }

  // Initialize the list of edges in the minimum spanning tree
  const mst = [];

  // Iterate through the edges
  for (let i = 0; i < edges.length; i++) {
    // Find the sets that the vertices belong to
    const x = findSet(sets, edges[i].source);
    const y = findSet(sets, edges[i].target);

    // If the vertices are not in the same set, add the edge to the minimum spanning tree
    // and union the sets
    if (x !== y) {
      mst.push(edges[i]);
      unionSet(sets, x, y);
    }
  }

  return mst;
}

// Find the set that a given vertex belongs to
function findSet(sets, vertex) {
  if (sets[vertex].parent !== vertex) {
    sets[vertex].parent = findSet(sets, sets[vertex].parent);
  }
  return sets[vertex].parent;
}

// Union two sets by rank
function unionSet(sets, x, y) {
  if (sets[x].rank > sets[y].rank) {
    sets[y].parent = x;
  } else {
    sets[x].parent = y;
    if (sets[x].rank === sets[y].rank) {
      sets[y].rank++;
    }
  }
}

function calculateMST() {
  // Parse the input values
  const vertices = JSON.parse(document.getElementById("vertices").value);
  const edges = JSON.parse(document.getElementById("edges").value);

  // Calculate the minimum spanning tree
  const mst = kruskal(vertices, edges);

  // Output the result
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Minimum spanning tree: " + JSON.stringify(mst);

  return false;
}
