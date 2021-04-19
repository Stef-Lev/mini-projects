"use strict"
document.getElementById('issueInputForm').addEventListener("submit", saveIssue);

function saveIssue(e) {
    let issueDesc = document.querySelector("#issueDescInput").value;
    let issueSeverity = document.querySelector("#issueSeverityInput").value;
    let issueAssignedTo = document.querySelector("#issueAssignedToInput").value;
    let issueId = chance.guid();
    let issueStatus = "Open";

    let issue = {
        id: issueId,
        description: issueDesc,
        severity: issueSeverity,
        assignedTo: issueAssignedTo,
        status: issueStatus
    }

    if (localStorage.getItem("issues") == null) {
        let issues = [];
        issues.push(issue);
        localStorage.setItem("issues", JSON.stringify(issues));
    } else {
        let issues = JSON.parse(localStorage.getItem("issues"));
        issues.push(issue);
        localStorage.setItem("issues", JSON.stringify(issues));
    }

    document.querySelector("#issueInputForm").reset();

    fetchIssues();

    e.preventDefault();
}

function setStatusClosed(id) {
    let issues = JSON.parse(localStorage.getItem("issues"));

    for (let i = 0; i < issues.length; i++) {
        if (issues[i].id == id) {
            issues[i].status = "Closed";
        }
    }

    localStorage.setItem("issues", JSON.stringify(issues));

    fetchIssues();

}

function deleteIssue(id) {
    let issues = JSON.parse(localStorage.getItem("issues"));

    for (let i = 0; i < issues.length; i++) {
        if (issues[i].id == id) {
            issues.splice(i, 1);
        }
    }

    localStorage.setItem("issues", JSON.stringify(issues));

    fetchIssues();

}

function fetchIssues() {
    let issues = JSON.parse(localStorage.getItem("issues"));
    let issuesList = document.querySelector("#issuesList");

    issuesList.innerHTML = "";
    for (let i = 0; i < issues.length; i++) {
        let id = issues[i].id;
        let desc = issues[i].description;
        let severity = issues[i].severity;
        let assignedTo = issues[i].assignedTo;
        let status = issues[i].status;


        //Check the glyphicon icon | Stopped coding at 35:00
        issuesList.innerHTML += '<div class="well">' +
            '<h6>Issue ID: ' + id + '</h6>' + '<p><span class="badge badge-info p-2">' + status + '</span></p>' + '<h3>' + desc + '</h3>' + '<p><i class="far fa-clock mr-2"></i>' + severity + '</p>' +
            '<p><i class="fas fa-user mr-2"></i>' + assignedTo + '</p>' +
            '<a href="#" onclick="setStatusClosed(\'' + id + '\')" class="btn btn-warning">Close</a>' +
            '<a href="#" onclick="deleteIssue(\'' + id + '\')" class="btn btn-danger">Delete</a>' + '</div>' + '<hr>';


    }

}