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
];

// {}오브젝트 형태로 보낼때

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("watch", { video, pageTitle: `Watching: ${video.title}` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("edit", { video, pageTitle: `Editing: ${video.title}` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.bady;
  videos[id - 1].title = title;
  return res.redirect(`/video/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Title" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 0,
    createdAt: "just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};

export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("Delete Video");
