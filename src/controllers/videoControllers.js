import express from "express";

export const trending = (req, res) => res.send("Home page Videos");
export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`)
};
export const edit = (req, res) => res.send("Edit Video");
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("deleteVideo");
export const upload = (req, res) => res.send("Upload");




