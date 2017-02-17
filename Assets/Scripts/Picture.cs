using UnityEngine;
using System.Collections;

public class Picture : MonoBehaviour {

	private WebCamSetup jsScript;  
	GameObject pictureHolder;

	public static bool showCamera = false;
	public static bool takePicture = false;
	public static bool clearPicture = false;
	public static bool stopCamera = false;
	// Use this for initialization
	void Start () {
		pictureHolder = GameObject.Find ("pictureHolder");
		jsScript = pictureHolder.GetComponent<WebCamSetup> (); //Don't forget to place the 'JS1' file inside the 'Standard Assets' folder  
		
		StartCoroutine (GetReadyShot ());
	}
	
	// Update is called once per frame
	void Update () {

	}

	IEnumerator GetReadyShot() {
		jsScript.StartCamera();
		yield return new WaitForSeconds (5f);
		jsScript.SnapPicture();
		yield return new WaitForSeconds (5f);
		jsScript.StopCamera();
	}
}
