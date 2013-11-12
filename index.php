<?php
if(!isset($_GET['p']))
	header('Location: http://graphics.dailybruin.com/reg2012/dorm.html');

$page = $_GET['p'];

if($page == 'fallevents')
	header('Location: http://graphics.dailybruin.com/reg2012/fallevents.html');
else if($page == 'news')
	header('Location: http://graphics.dailybruin.com/reg2012/international/');
else if ($page == 'whiteboard')
	header('Location: http://graphics.dailybruin.com/reg2012/opinion.html');
else if($page == 'depthchart')
	header('Location: http://graphics.dailybruin.com/football2012');
else if($page == 'elections')
	header('Location: http://graphics.dailybruin.com/reg2012/election.html');
else
	header('Location: http://graphics.dailybruin.com/reg2012/dorm.html');

?>
