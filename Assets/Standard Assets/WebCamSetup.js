#pragma strict

private var webcam : WebCamTexture;
var data : Color32[];
var tex : Texture2D;
var strName : String;

function Start () {
	webcam = WebCamTexture();
	//Debug.Log(webcam.width + " " + webcam.height);
	//data = new Color32[webcam.width * webcam.height];
	//tex = new Texture2D(webcam.width,webcam.height);
}

public function ResetImage() {
	//tex = new Texture2D(webcam.width,webcam.height);
	//tex.Apply();
	//webcam = WebCamTexture();
	//webcam.Play();
	GetComponent.<Renderer>().material.mainTexture = webcam;
}

public function getTex() {
	return tex;
}

public function StartCamera() {
	webcam = WebCamTexture();
	webcam.Play();
	GetComponent.<Renderer>().material.mainTexture = webcam;
}

public function StopCamera() {
	webcam.Stop();
}

public function SnapPicture() {
	data = new Color32[webcam.width * webcam.height];
	tex = new Texture2D(webcam.width,webcam.height);
	var pictureHolder : GameObject;
	var renderer : Renderer;
	var fill : Material;
	var material : Material;
	webcam.GetPixels32(data);
	pictureHolder = GameObject.Find ("pictureHolder");
	renderer = pictureHolder.GetComponent.<Renderer>();
	renderer.material.shader = Shader.Find ("Sprites/Default");
	fill = new Material(Shader.Find("Sprites/Default"));
	renderer.material = fill;
	material = renderer.material;
	material.mainTexture = tex;
	
	tex.SetPixels32(data);
	tex.Apply();
}