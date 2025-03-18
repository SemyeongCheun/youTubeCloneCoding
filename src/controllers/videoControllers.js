
let videos = [
  {
    title: "first video",
    rating: 5,
    comments: 5,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "second Video",
    rating: 5,
    comments: 5,
    createdAt: "2 minutes ago",
    views: 55,
    id: 2,
  },
  {
    title: "3th Video",
    rating: 5,
    comments: 5,
    createdAt: "2 minutes ago",
    views: 55,
    id: 3,
  },
]


export const trending = (req, res) => {
  return res.render("home", {pageTitle: "home", videos})
};
export const watch = (req, res) => {
  const {id} = req.params;
  const video = videos[id - 1];
  res.render("watch", {video, pageTitle: `Watching ${video.title}`});
};
export const edit = (req, res) => res.render("edit", {videoId: (req.params.id)});
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("Delete Video");
export const upload = (req, res) => res.send("Upload");




