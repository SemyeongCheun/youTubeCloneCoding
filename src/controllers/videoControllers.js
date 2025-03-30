import videoModel from "../models/video";

// {}오브젝트 형태로 보낼때

export const home = (req, res) => {
  return res.render("home", { pageTitle: "home" });
};
export const watch = (req, res) => {
  const { id } = req.params;
  res.render("watch", { pageTitle: `Watching:` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  res.render("edit", { pageTitle: `Editing:` });
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
  return res.redirect("/");
};

export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("Delete Video");
