from fastapi.testclient import TestClient
from src import app as app_module

client = TestClient(app_module.app)


def test_get_activities():
    resp = client.get("/activities")
    assert resp.status_code == 200
    data = resp.json()
    assert isinstance(data, dict)
    # basic known activity present
    assert "Chess Club" in data


def test_signup_and_unregister_flow():
    activity = "Chess Club"
    email = "testuser@example.com"

    # Ensure clean state: remove test email if present
    participants = app_module.activities[activity]["participants"]
    if email in participants:
        participants.remove(email)

    # Sign up the test user
    resp = client.post(f"/activities/{activity}/signup", params={"email": email})
    assert resp.status_code == 200
    json_data = resp.json()
    assert "Signed up" in json_data.get("message", "")
    assert email in app_module.activities[activity]["participants"]

    # Signing up again should fail with 400
    resp_dup = client.post(f"/activities/{activity}/signup", params={"email": email})
    assert resp_dup.status_code == 400

    # Unregister the test user
    resp_del = client.delete(f"/activities/{activity}/signup", params={"email": email})
    assert resp_del.status_code == 200
    assert email not in app_module.activities[activity]["participants"]

    # Deleting again should return 404
    resp_del2 = client.delete(f"/activities/{activity}/signup", params={"email": email})
    assert resp_del2.status_code == 404
