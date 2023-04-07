
# Banker's Algorithm

Banker's algorithm 

The Banker's Algorithm is a resource allocation and deadlock avoidance algorithm used in operating systems to ensure the safe and efficient allocation of resources to processes.

The algorithm was developed by Dijkstra in 1965 and is based on the idea of preventing deadlock by checking whether a process can request the resources it needs without leading to a deadlock. The Banker's algorithm is used by the operating system to ensure that the system can meet the resource requests of all processes without getting into a deadlock situation.

The algorithm works by maintaining a record of the total number of available resources and the resources currently allocated to each process. It also maintains a record of the maximum number of resources each process can request. Using this information, the algorithm determines whether a process can request additional resources without leading to a deadlock. If the system can satisfy the request, the resources are allocated to the process, and the system continues to run. If the request cannot be satisfied without leading to a deadlock, the process is forced to wait until the resources become available.

The Banker's algorithm is widely used in modern operating systems and is considered a robust and efficient method of resource allocation and deadlock avoidance.



process:

1) The algorithm starts by taking an input of the total number of available resources and the current allocation of resources to each process.

2) The algorithm then calculates the maximum number of resources that each process can request. This information is usually provided by the process when it is created.

3) The algorithm checks whether a process can request the resources it needs without leading to a deadlock. This is done by simulating the allocation of resources to the process and checking whether the resulting system will still be in a safe state, i.e., there will be no deadlock.

4) If the system can satisfy the request, the resources are allocated to the process, and the system continues to run. If the request cannot be satisfied without leading to a deadlock, the process is forced to wait until the resources become available.

5) Whenever a process releases a resource, the algorithm checks whether the system is still in a safe state. If it is, the resource is deallocated, and the system continues to run. If the system is not in a safe state, the process is forced to wait until additional resources become available.

6) The algorithm continues to allocate and deallocate resources based on the requests of the processes until all processes have completed their tasks and released their resources.

The Banker's algorithm is widely used in modern operating systems and is considered a robust and efficient method of resource allocation and deadlock avoidance. The algorithm ensures that the system can meet the resource requests of all processes without getting into a deadlock situation.


# Need for Banker's Algorithm

Need...
The algorithm checks each process' resource needs to make sure that granting those resources won't result in a deadlock. When two or more processes are waiting for each other to release resources that they require to move onto the next phase, a deadlock results. This looping waiting condition may result in a deadlock that prevents any processes from moving forward.

The available vector, allocation matrix, and need matrix are the three data structures that the Banker's algorithm uses to make sure the system is always in a secure state. The allocation matrix shows how many resources of each type are currently allocated to each process, while the available vector shows how many resources of each type are currently available. The resources that each process still requires to finish execution are shown in the need matrix.

The algorithm determines whether a process can finish running with the resources at hand. The procedure is permitted to allocate the resources it requires, if possible. If not, the procedure is suspended until the required resources are made available. This guarantees that the system stays secure and eliminates the possibility of a deadlock.
The Banker's algorithm is, in general, a crucial tool for preserving system stability and avoiding deadlocks. It enables multiple processes to effectively share a constrained set of resources while avoiding looping waiting situations that can result in system-wide deadlocks.

# TechStack Used
- ReactJs
- NodeJs
- ExpressJs
- MongoDB
## API Reference

#### Get all items

```http
  GET /api/v1/get/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. Object id |

#### Get item

```http
  POST /api/v1/schedule
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `body`      | `json` | **Required**. json data of Input from Front-end |



## Authors

- [Priyank Vaidya](https://www.github.com/octokatherine)
- [Akanksha Sharma](https://github.com/akankshaaa8)
- [Manav Surti](https://github.com/infosecmanav)
- [Puja Mavadhiya](https://github.com/pujamavadhiya)


## Badges


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

