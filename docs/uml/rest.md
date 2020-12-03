---
title: go-rest/rest
slug: /
---

```plantuml
class ServerConfig {
    Host string
    Port int
    BodyLimit string
    Gzip bool
    GzipLevel int
    CacheCapacity int
    CacheTTL time.Duration
}

interface RepositoryInterface {
    EnsureIndexs()
	Init(db db.DatabaseBase, collection string)
	RegisterLifeCycle(l LifeCycle)
	Find() (int64, error)
	FindOne() error
	Aggregate() (int64, error)
	AggregateOne() error
	Head() int64
	Insert() (interface{}, error)
	UpdateOne() (interface{}, error)
	DeleteOne() (interface{}, error)
}

RepositoryInterface <|-- HandlerBase 

class HandlerBase {

}

```
