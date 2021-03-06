# Gym App

## Overview

My proposal will be a gym application in which holds records for the users best lifts, their membership program and access to locations. The most dynamic way of putting this together would be through a many to many relationship but at first I’ll test a one to many and go from there.

## Primary Objectives

- Add clients.
- Add locations. All locations will have will have references to the clients that have access to the location.
- Add max lifts of each client.
- Access information about the client.
-

## Secondary Objectives

- Add membership status.
- Add a total club that will add all their lifts together and put them into a ranking of lifts.
- Create client logins so that they can see just their own grades.

## Bonus Objectives

- Add a ranking system that will compare your lifts to the rest and give a percentage of where you place.
- A time subscription reward of 3 levels and each level is dependent of the time they have been subcribed
  .

## Sample Data

The sample data only accounts for the Primary Objectives.
All ids will be generated by MongoDB.

### Client

```json
{
    "fname": "Jabari",
    "lname": "O'Kon",
    "email": "Leora_Runolfsdottir40@hotmail.com",
    "phone": "970-423-9497",
    "membership": [],
    "location": [],
    "club": 1000,
    "card": 839563,
    "rewardLevel": []
  },
```

### Admin

```json
{
  "username": "employee",
  "password": "secrets!"
}
```

The password would be encrypted.

### Membership

```json
{
  "plan": 25.5,
  "locations": [],
  "clients": []
}
```

### Locations

```json
{
  "address": "754 River Creek dr",
  "phoneNumber": "618-423-9497",
  "clients": [],
  "membership": []
}
```

### Rewards

```json
{
  "Level": 1,
  "rewards": ["Free T-shirt", "Protein bottle", "Towel"],
  "clients": []
}
```

## Routes

All routes will be prefaced with `/api`.
All routes will be protected via JWT after authenticating an Admin.

### clients

`/clients`

Standard 4 routes...

### Admin Routes

`/admin`

`POST` - `/authenticate`
`POST` - `/register`
`PUT` - `/:id`

### Membership

Standard 4 routes...

## Location

All 4 routes

## Rewards

All 4 routes

## External APIs

None ATM.
