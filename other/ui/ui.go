package ui

import (
	"embed"
	"io/fs"
)

//go:embed css/* images/* templates/*
var embedFS embed.FS

// GetAssets returns a filesystem for assets (stripping "assets" is not needed
// as we use the folder names css and images directly)
func GetAssets() fs.FS {
	return embedFS
}

// GetTemplates returns the filesystem for template parsing.
func GetTemplates() fs.FS {
	return embedFS
}
