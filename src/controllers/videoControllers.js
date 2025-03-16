


export const trending = (req, res) => {
  const videos = [
    {
      title: "hello",
      rating: 5,
      comments: 5,
      createdAt: "2 minutes ago",
      view: 55,
      id: 1,
    },
    {
      title: "Game Video",
      rating: 5,
      comments: 5,
      createdAt: "2 minutes ago",
      view: 55,
      id: 1,
    },
    {
      title: "Cat Video",
      rating: 5,
      comments: 5,
      createdAt: "2 minutes ago",
      view: 55,
      id: 1,
    },
  ]
  return res.render("home", {pageTitle: "home", videos})
};
export const see = (req, res) => {
  res.render("watch", {videoId: (req.params.id), pageTitle: "Watch"});
};
export const edit = (req, res) => res.render("edit", {videoId: (req.params.id)});
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("deleteVideo");
export const upload = (req, res) => res.send("Upload");




