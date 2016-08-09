Images =new Mongo.Collection("images");


Images.allow({
	insert:function(userId,doc){
		if(Meteor.user()){
			console.log(doc);
			//force the image to be owned by user 
			
			if(userId!=doc.createdBy){
				//user messing with other's data
				console.log("testing security1");
				return false;
			}
			else
			{//user logged in, image has correct id
				console.log("testing security2");
				return true;
				
			}
		}
		else
		{//user not logged in
			console.log("testing security3");
			return false;
		}
 
		return true;
	},
	remove:function(userId,doc){
		return true;
	}
})