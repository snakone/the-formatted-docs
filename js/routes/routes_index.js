var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app.routing.ts","module":"RoutingModule","children":[{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"home","loadChildren":"./pages/home/home.module#HomeModule","data":{"name":"Home"},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/home/home.routing.ts","module":"HomeRoutingModule","children":[{"path":"","component":"HomeComponent"}],"kind":"module"}],"module":"HomeModule"}]},{"path":"create","loadChildren":"./pages/create/create.module#CreateModule","data":{"name":"Create"},"canActivate":["UserGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/create/create.routing.ts","module":"CreateRoutingModule","children":[{"path":"","component":"CreateComponent","children":[{"path":"","component":"CreateContentComponent"},{"path":"form","component":"CreateFormComponent","canActivate":["ActiveGuard"]}]}],"kind":"module"}],"module":"CreateModule"}]},{"path":"news","loadChildren":"./pages/news/news.module#NewsModule","data":{"name":"News"},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/news/news.routing.ts","module":"NewsRoutingModule","children":[{"path":"","component":"NewsComponent"}],"kind":"module"}],"module":"NewsModule"}]},{"path":"help","loadChildren":"./pages/help/help.module#HelpModule","data":{"name":"Help"},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/help/help.routing.ts","module":"HelpRoutingModule","children":[{"path":"","component":"HelpComponent"}],"kind":"module"}],"module":"HelpModule"}]},{"path":"profile","loadChildren":"./pages/profile/profile.module#ProfileModule","data":{"name":"Profile"},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/profile/profile.routing.ts","module":"ProfileRoutingModule","children":[{"path":"","component":"ProfileComponent","canActivate":["UserGuard"],"children":[{"path":"","component":"ProfileHomeComponent"},{"path":"posts","component":"ProfilePostsComponent"},{"path":"drafts","component":"ProfileDraftsComponent"},{"path":"friends","component":"ProfileFriendsComponent"},{"path":"favorites","component":"ProfileFavoritesComponent"},{"path":"settings","component":"ProfileSettingsComponent"}]},{"path":":id","component":"ProfilePublicComponent","canActivate":["PublicProfileGuard"]}],"kind":"module"}],"module":"ProfileModule"}]},{"path":"post/:slug","loadChildren":"./pages/post/post.module#PostModule","data":{"name":"Post"},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/post/post.routing.ts","module":"PostRoutingModule","children":[{"path":"","component":"PostComponent"}],"kind":"module"}],"module":"PostModule"}]},{"path":"draft/:slug","canActivate":["SameUserGuard"],"loadChildren":"./pages/draft/draft.module#DraftModule","data":{"name":"Draft"},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/draft/draft-routing.module.ts","module":"DraftRoutingModule","children":[{"path":"","component":"DraftComponent"}],"kind":"module"}],"module":"DraftModule"}]},{"path":"admin","loadChildren":"./pages/admin/admin.module#AdminModule","data":{"name":"Admin"},"canActivate":["AdminGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/admin/admin-routing.module.ts","module":"AdminRoutingModule","children":[{"path":"","component":"AdminComponent","children":[{"path":"","component":"AdminContentComponent"},{"path":":id","component":"AdminDraftComponent"}]}],"kind":"module"}],"module":"AdminModule"}]},{"path":"conditions","loadChildren":"./pages/conditions/conditions.module#ConditionsModule","data":{"name":"Conditions"},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/conditions/conditions-routing.module.ts","module":"ConditionsRoutingModule","children":[{"path":"","component":"ConditionsComponent"}],"kind":"module"}],"module":"ConditionsModule"}]},{"path":"search","loadChildren":"./pages/search/search.module#SearchModule","data":{"name":"Search"},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/search/search.routing.ts","module":"SearchRoutingModule","children":[{"path":"","component":"SearchComponent"}],"kind":"module"}],"module":"SearchModule"}]},{"path":"**","redirectTo":"home"}],"kind":"module"}]}
