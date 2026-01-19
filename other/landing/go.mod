module github.com/nasharena/landing

go 1.25.0

require (
	github.com/go-chi/chi/v5 v5.2.3
	github.com/nasharena/core v0.0.0
	github.com/nasharena/ui v0.0.0
)

replace github.com/nasharena/ui => ../../ui
replace github.com/nasharena/core => ../../core
